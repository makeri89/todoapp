import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@lib/mongodb'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log('req.body', req.body)
	const client = await clientPromise
	const db = client.db(process.env.MONGODB_DATABASE)
	const todo = await db.collection('todos').insertOne(req.body)
	res.status(200).json(todo)
}
