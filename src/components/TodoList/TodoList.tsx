import Todo from '@ui/Todo'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'

import { Todo as TodoType } from '@lib/types'
import { useState } from 'react'
import axios from 'axios'

interface Props {
  todos: TodoType[]
}

const reorder = (
  list: TodoType[],
  startIndex: number,
  endIndex: number
): TodoType[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const TodoList = ({ todos }: Props) => {
  const [todoState, setTodoState] = useState<TodoType[]>(todos)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    const newTodos = reorder(todoState, source.index, destination.index)

    setTodoState(newTodos)
  }

  const handleTodoDelete = async (id: string) => {
    await axios.post('/api/delete', {
      id,
    })

    const newTodos = todoState.filter((todo) => todo.id !== id)

    setTodoState(newTodos)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todolist">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todoState.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Todo todo={todo} handleDelete={handleTodoDelete} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList
