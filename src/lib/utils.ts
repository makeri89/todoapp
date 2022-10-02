import { MongoTodo, Todo } from './types'

export const parseMongoTodos = (todos: any): Todo[] => {
	return todos.map((todo: MongoTodo) => {
		const { _id, ...newTodo } = todo
		return {
			...newTodo,
			id: _id.toString(),
		}
	})
}
