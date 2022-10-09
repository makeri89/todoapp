import { MongoTodo, Todo } from './types'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import axios from 'axios'

dayjs.extend(isoWeek)

export const parseMongoTodos = (todos: any): Todo[] => {
  return todos.map((todo: MongoTodo) => {
    const { _id, ...newTodo } = todo
    return {
      ...newTodo,
      id: _id.toString(),
    }
  })
}

export const getWeek = (week: string): number | null => {
  switch (week) {
    case 'current':
      return dayjs().isoWeek()
    case 'next':
      return dayjs().add(1, 'week').isoWeek()
    case 'backlog':
      return null
    default:
      return null
  }
}

export const updateTodo = async (
  todo: Partial<Todo> & Required<Pick<Todo, 'id'>>
): Promise<void> => {
  await axios.post(`/api/update`, todo)
}
