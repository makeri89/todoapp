export interface Todo {
	id: string
	task: string
	dueDate: string | null
	week: string | null
	status: string
}

export interface User {
	email: string
	name: string
	image: string
}
