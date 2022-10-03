export interface Todo {
  id: string
  task: string
  dueDate: string | null
  week: number | null
  status: 'todo' | 'completed'
}

export type MongoTodo = Omit<Todo, 'id'> & { _id: string }

export interface User {
  email: string
  name: string
  image: string
}
