import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@lib/mongodb'
import { parseMongoTodos } from '@lib/utils'
import { Todo } from '@lib/types'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Todo[]>
) {
	const client = await clientPromise
	const db = client.db('test')
	const todos = await db
		.collection('todos')
		.find({ user: req.query.user })
		.toArray()

	res.status(200).json(parseMongoTodos(todos))
}
