import { Todo as TodoType } from '@lib/types'
import ContextMenu from '@ui/ContextMenu'
import Checkbox from '@ui/Checkbox'
import { Wrapper } from './components'
import { Text } from '@ui/atoms'
import { useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

interface Props {
  todo: TodoType
}

const Todo = ({ todo }: Props) => {
  const [status, setStatus] = useState(todo.status)

  const handleStatusChange = async () => {
    if (status === 'completed') {
      setStatus('todo')
      await axios.post('/api/update', {
        id: todo.id,
        status: 'todo',
      })
    } else {
      setStatus('completed')
      await axios.post('/api/update', {
        id: todo.id,
        status: 'completed',
      })
    }
  }

  return (
    <ContextMenu>
      <Wrapper size={{ '@initial': 'small', '@md': 'md' }} status={status}>
        <Checkbox
          checked={status === 'completed'}
          handleChange={handleStatusChange}
        />
        <Text>{todo.task}</Text>
        {todo.dueDate && todo.status !== 'completed' && (
          <Text>{dayjs(todo.dueDate).format('DD.MM.')}</Text>
        )}
      </Wrapper>
    </ContextMenu>
  )
}

export default Todo
