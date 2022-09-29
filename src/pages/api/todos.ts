import type { NextApiRequest, NextApiResponse } from 'next'
import { Todo } from '@lib/types'

const todos: Todo[] = [
	{ id: 'a', task: 'laundry', dueDate: null, week: null, status: 'todo' },
	{ id: 'b', task: 'dishes', dueDate: null, week: null, status: 'todo' },
	{ id: 'c', task: 'exam', dueDate: null, week: null, status: 'todo' },
	{ id: 'd', task: 'app planning', dueDate: null, week: null, status: 'todo' },
]

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Todo[]>
) {
	res.status(200).json(todos)
}
