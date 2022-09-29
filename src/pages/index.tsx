import type { GetServerSideProps, NextPage } from 'next'
import { Todo } from '@lib/types'
import { useSession } from 'next-auth/react'

interface Props {
	todos: Todo[]
}

const Home: NextPage<Props> = ({ todos }) => {
	const { data: session, status } = useSession()
	console.log(session, status)
	return <div>Hello, todoapp</div>
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
	const data = await fetch('http://localhost:3000/api/todos')
	return {
		props: {
			todos: await data.json(),
		},
	}
}
