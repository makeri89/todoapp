import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@lib/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DATABASE)
  const collection = db.collection('todos')
  const { id } = req.body
  const objectId = new ObjectId(id)
  const todo = await collection.deleteOne({ _id: objectId })
  res.status(200).json(todo)
}
