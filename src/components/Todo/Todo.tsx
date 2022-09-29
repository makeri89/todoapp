import { styled } from 'stitches.config'

import { Todo as TodoType } from '@lib/types'
import ContextMenu from '@ui/ContextMenu'

interface Props {
	todo: TodoType
}

const Instruction = styled('div', {
	border: '2px black dashed',
	width: 300,
	borderRadius: 15,
	padding: '45px 0',
	textAlign: 'center',
	userSelect: 'none',
	backgroundColor: '$plum5',
})

const Todo = ({ todo }: Props) => {
	return (
		<ContextMenu>
			<Instruction>{todo.task}</Instruction>
		</ContextMenu>
	)
}

export default Todo
