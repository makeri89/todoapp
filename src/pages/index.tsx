import type { GetServerSideProps, NextPage } from 'next'
import { Todo } from '@lib/types'
import { useSession, signOut } from 'next-auth/react'
import { Button, Flex, Heading } from '@ui/atoms'
import ListArea from '@ui/ListArea'
import NewTodoModal from '@ui/NewTodoModal'
import clientPromise from '@lib/mongodb'
import { parseMongoTodos } from '@lib/utils'
import { useRouter } from 'next/router'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(isoWeek)

interface Props {
  todos: Todo[]
}

const Home: NextPage<Props> = ({ todos }) => {
  const router = useRouter()
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/login')
    },
  })

  return (
    <Flex
      css={{
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Heading level="h1">Your todos, {session?.user.name}</Heading>
      <NewTodoModal />
      <Button css={{ margin: ' 10px auto' }} onClick={() => signOut()}>
        Sign out
      </Button>
      <ListArea todos={todos} />
    </Flex>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DATABASE)
  const todos = await db
    .collection('todos')
    .find({
      user: session?.user.email,
      $or: [
        {
          week: {
            $gte: dayjs().isoWeek(),
          },
        },
        {
          week: {
            $eq: null,
          },
        },
      ],
    })
    .sort({ status: -1 })
    .toArray()
  return {
    props: {
      todos: parseMongoTodos(todos),
    },
  }
}
