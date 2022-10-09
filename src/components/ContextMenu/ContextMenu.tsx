import { Todo } from '@lib/types'
import { MouseEventHandler } from 'react'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import { updateTodo } from '@lib/utils'
import { ContextMenu, Content, Trigger, Item } from './components'

dayjs.extend(isoWeek)

interface Props {
  children: React.ReactNode
  todo: Todo
  internalStatus: string
  onStatusChange: MouseEventHandler<HTMLDivElement>
  onDelete: Function
}

const CustomContextMenu = ({
  children,
  todo,
  internalStatus,
  onStatusChange,
  onDelete,
}: Props) => {
  const handleMoveToCurrentWeek = async () => {
    const currentWeek = dayjs().isoWeek()
    await updateTodo({ id: todo.id, week: currentWeek })
  }

  const handleMoveToNextWeek = async () => {
    const nextWeek = dayjs().isoWeek() + 1
    await updateTodo({ id: todo.id, week: nextWeek })
  }

  return (
    <ContextMenu>
      <Trigger>{children}</Trigger>
      <Content>
        <Item onClick={onStatusChange}>
          {internalStatus === 'completed'
            ? 'Mark as uncompleted'
            : 'Mark as completed'}
        </Item>
        <Item onClick={handleMoveToCurrentWeek}>Schedule for this week</Item>
        <Item onClick={handleMoveToNextWeek}>Schedule for next week</Item>
        <Item onClick={() => onDelete(todo.id)}>Delete</Item>
      </Content>
    </ContextMenu>
  )
}

export default CustomContextMenu
