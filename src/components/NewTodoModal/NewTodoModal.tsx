import { newDueDateState, newTaskState, newWeekState } from '@lib/store'
import { Button } from '@ui/atoms'
import Modal from '@ui/Modal'
import TodoForm from '@ui/TodoForm'
import { useRecoilValue } from 'recoil'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { getWeek } from '@lib/utils'
import dayjs from 'dayjs'

const NewTodoModal = () => {
  const task = useRecoilValue(newTaskState)
  const week = useRecoilValue(newWeekState)
  const dueDate = useRecoilValue(newDueDateState)

  const { data: session } = useSession()

  const handleSubmit = async () => {
    await axios.post('/api/create', {
      task,
      week: getWeek(week),
      dueDate,
      status: 'todo',
      user: session?.user.email,
      created_at: dayjs(),
    })
  }

  return (
    <Modal title="Add todo" trigger={<Button>Add new todo</Button>}>
      <TodoForm handleSubmit={handleSubmit} />
    </Modal>
  )
}

export default NewTodoModal
