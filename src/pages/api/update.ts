import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@lib/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('aaa', req.body)
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DATABASE)
  const collection = db.collection('todos')
  const { id, ...data } = req.body
  const objectId = new ObjectId(id)
  const todo = await collection.updateOne({ _id: objectId }, { $set: data })
  console.log(todo)
  res.status(200).json(todo)
}
