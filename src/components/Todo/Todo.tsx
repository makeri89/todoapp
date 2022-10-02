import { Todo as TodoType } from '@lib/types'
import ContextMenu from '@ui/ContextMenu'
import Checkbox from '@ui/Checkbox'
import { Wrapper } from './components'

interface Props {
  todo: TodoType
}

const Todo = ({ todo }: Props) => {
  return (
    <ContextMenu>
      <Wrapper size={{ '@initial': 'small', '@md': 'md' }}>
        <Checkbox />
        {todo.task}
      </Wrapper>
    </ContextMenu>
  )
}

export default Todo
