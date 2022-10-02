import { Button } from '@ui/atoms'
import Modal from '@ui/Modal'
import TodoForm from '@ui/TodoForm'

const NewTodoModal = () => {
	return (
		<Modal title="Add todo" trigger={<Button>Add new todo</Button>}>
			<TodoForm />
		</Modal>
	)
}

export default NewTodoModal
