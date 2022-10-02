import type { GetServerSideProps, NextPage } from 'next'
import { Todo } from '@lib/types'
import { getSession } from 'next-auth/react'
import axios from 'axios'
import { Box, Heading } from '@ui/atoms'
import ListArea from '@ui/ListArea'

interface Props {
	todos: Todo[]
}

const Home: NextPage<Props> = ({ todos }) => {
	// const handleClick = async () => {
	// 	await axios.post('/api/create', {
	// 		task: 'testing',
	// 		dueDate: null,
	// 		week: 39,
	// 		status: 'todo',
	// 		user: session?.user.email,
	// 	})
	// }

	return (
		<Box>
			<Box
				css={{
					textAlign: 'center',
				}}
			>
				<Heading level="h1">Your todos</Heading>
			</Box>
			<ListArea todos={todos} />
		</Box>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	const data = await axios.get('http://localhost:3000/api/todos', {
		params: { user: session?.user.email },
	})
	return {
		props: {
			todos: await data.data,
		},
	}
}
