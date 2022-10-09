import { Todo } from '@lib/types'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { MouseEventHandler } from 'react'
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import { updateTodo } from '@lib/utils'

dayjs.extend(isoWeek)

interface Props {
  children: React.ReactNode
  todo: Todo
  internalStatus: string
  onStatusChange: MouseEventHandler<HTMLDivElement>
  onDelete: Function
}

const ContextMenu = ContextMenuPrimitive.Root
const Trigger = ContextMenuPrimitive.Trigger
const Portal = ContextMenuPrimitive.Portal
const Content = ContextMenuPrimitive.Content
const Item = ContextMenuPrimitive.Item

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
      <Portal>
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
      </Portal>
    </ContextMenu>
  )
}

export default CustomContextMenu
