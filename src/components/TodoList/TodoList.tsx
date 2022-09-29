import Todo from '@ui/Todo'

import { Todo as TodoType } from '@lib/types'

interface Props {
	todos: TodoType[]
}

const TodoList = ({ todos }: Props) => {
	return (
		<>
			{todos.map((todo) => (
				<Todo key={todo.task} todo={todo} />
			))}
		</>
	)
}

export default TodoList
