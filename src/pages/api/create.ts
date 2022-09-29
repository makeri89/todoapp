import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@lib/mongodb'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const client = await clientPromise
	const db = client.db('test')
	console.log(req.body)
	const todo = await db.collection('todos').insertOne(req.body)
	console.log('todo', todo)
	res.status(200).json(todo)
}
