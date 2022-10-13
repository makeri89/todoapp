import { ComponentMeta } from '@storybook/react'
import Todo from './Todo'
import { Todo as TodoType } from '@lib/types'

const mockTodo: TodoType = {
  id: '1',
  task: 'Task 1',
  status: 'todo',
  dueDate: '2021-08-01',
  week: 30,
}

export default {
  title: 'Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>

export const TodoWithDueDate = () => (
  <Todo todo={mockTodo} handleDelete={() => {}} />
)

export const TodoWithoutDueDate = () => (
  <Todo todo={{ ...mockTodo, dueDate: null }} handleDelete={() => {}} />
)
