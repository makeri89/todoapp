import { Todo as TodoType } from '@lib/types'
import Checkbox from '@ui/Checkbox'
import { Wrapper } from './components'
import { Box, Button, Text } from '@ui/atoms'
import { useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import Alert from '@ui/Alert'
import { MouseEvent } from 'react'

interface Props {
  todo: TodoType
  handleDelete: Function
}

const Todo = ({ todo, handleDelete }: Props) => {
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

  const handleDeleteConfirm = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleDelete(todo.id)
  }

  return (
    <Wrapper size={{ '@initial': 'small', '@md': 'md' }} status={status}>
      <Checkbox
        checked={status === 'completed'}
        handleChange={handleStatusChange}
      />
      <Text css={{ gridColumnStart: 'span 2' }}>{todo.task}</Text>
      <Box css={{ gridColumnStart: 'span 2' }}>
        {todo.dueDate && todo.status !== 'completed' && (
          <Text>Due: {dayjs(todo.dueDate).format('DD.MM.')}</Text>
        )}
      </Box>
      <Alert
        title="Delete todo?"
        description="Are you sure you want to delete this todo?"
        successHandler={handleDeleteConfirm}
        trigger={
          <Button size="sm" css={{ marginTop: -10, marginBottom: 5 }}>
            Delete
          </Button>
        }
      />
    </Wrapper>
  )
}

export default Todo
