import type { NextApiRequest, NextApiResponse } from 'next'
import { Todo } from '@lib/types'
import clientPromise from '@lib/mongodb'

// const todos: Todo[] = [
// 	{ id: 'a', task: 'laundry', dueDate: null, week: null, status: 'todo' },
// 	{ id: 'b', task: 'dishes', dueDate: null, week: null, status: 'todo' },
// 	{ id: 'c', task: 'exam', dueDate: null, week: null, status: 'todo' },
// 	{ id: 'd', task: 'app planning', dueDate: null, week: null, status: 'todo' },
// ]

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// console.log(req.query.user)
	const client = await clientPromise
	const db = client.db('test')
	const todos = await db
		.collection('todos')
		.find({ user: req.query.user })
		.toArray()

	// console.log(todos)

	res.status(200).json(todos)
}
