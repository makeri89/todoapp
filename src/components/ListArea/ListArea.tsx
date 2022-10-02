import { Todo } from '@lib/types'
import { Flex, Heading, Text } from '@ui/atoms'
import TodoList from '@ui/TodoList'

import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'

import * as R from 'ramda'

dayjs.extend(isoWeek)

interface Props {
  todos: Todo[]
}

const ListArea = ({ todos }: Props) => {
  const currentWeek = dayjs().isoWeek()

  const todoLists = R.groupBy((todo) => {
    const { week } = todo
    return week === currentWeek
      ? 'current'
      : week === currentWeek + 1
      ? 'next'
      : 'backlog'
  }, todos)

  return (
    <Flex
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Heading level="h2">This week</Heading>
      {todoLists.current && <TodoList todos={todoLists.current} />}
      <Heading level="h2">Next week</Heading>
      {todoLists.next ? (
        <TodoList todos={todoLists.next} />
      ) : (
        <Text>Nothing to do.</Text>
      )}
      <Heading level="h2">Backlog</Heading>
      {todoLists.backlog ? (
        <TodoList todos={todoLists.backlog} />
      ) : (
        <Text>Nothing to do.</Text>
      )}
    </Flex>
  )
}

export default ListArea
