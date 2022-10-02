export interface Todo {
	id: string
	task: string
	dueDate: string | null
	week: string | null
	status: string
}

export type MongoTodo = Omit<Todo, 'id'> & { _id: string }

export interface User {
	email: string
	name: string
	image: string
}
