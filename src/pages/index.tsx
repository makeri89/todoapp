import type { GetServerSideProps, NextPage } from 'next'
import { Todo } from '@lib/types'
import { useSession } from 'next-auth/react'
import { Box, Heading } from '@ui/atoms'
import ListArea from '@ui/ListArea'
import NewTodoModal from '@ui/NewTodoModal'
import clientPromise from '@lib/mongodb'
import { parseMongoTodos } from '@lib/utils'
import { useRouter } from 'next/router'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'

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
    <Box
      css={{
        textAlign: 'center',
      }}
    >
      <Heading level="h1">Your todos, {session?.user.name}</Heading>
      <NewTodoModal />
      <ListArea todos={todos} />
    </Box>
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
    .find({ user: session?.user.email })
    .toArray()
  return {
    props: {
      todos: parseMongoTodos(todos),
    },
  }
}
