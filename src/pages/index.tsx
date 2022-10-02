import type { GetServerSideProps, NextPage } from 'next'
import { Todo } from '@lib/types'
import { getSession, useSession } from 'next-auth/react'
import { Box, Heading } from '@ui/atoms'
import ListArea from '@ui/ListArea'
import NewTodoModal from '@ui/NewTodoModal'
import clientPromise from '@lib/mongodb'
import { parseMongoTodos } from '@lib/utils'

interface Props {
	todos: Todo[]
}

const Home: NextPage<Props> = ({ todos }) => {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			window.location.href = '/api/auth/signin'
		},
	})

	return (
		<Box>
			<Box
				css={{
					textAlign: 'center',
				}}
			>
				<Heading level="h1">Your todos, {session?.user.name}</Heading>
			</Box>
			<NewTodoModal />
			<ListArea todos={todos} />
		</Box>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	const client = await clientPromise
	const db = client.db('test')
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
