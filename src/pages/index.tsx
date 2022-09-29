import type { GetServerSideProps, NextPage } from 'next'
import { Todo } from '@lib/types'
import { getSession, useSession } from 'next-auth/react'
import axios from 'axios'

interface Props {
	todos: Todo[]
}

const Home: NextPage<Props> = ({ todos }) => {
	const { data: session, status } = useSession()
	console.log(session, status)

	const handleClick = async () => {
		await axios.post('/api/create', {
			task: 'testing',
			dueDate: null,
			week: 39,
			status: 'todo',
			user: session?.user.email,
		})
	}

	return (
		<div>
			Hello, {session?.user?.name} <button onClick={handleClick}>Submit</button>{' '}
			<br />
			Your todos:
			<ul>
				{todos.map((todo) => (
					<li key={todo.task}>
						{todo.task} {todo.status}
					</li>
				))}
			</ul>
		</div>
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
