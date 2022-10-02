import { Box, Button, Flex, Input } from '@ui/atoms'
import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '@lib/stitches.config'
import Select from '@ui/Select'
import { useRecoilState } from 'recoil'
import { newDueDateState, newTaskState, newWeekState } from '@lib/store'
import { ChangeEvent } from 'react'
import dayjs from 'dayjs'

const StyledLabel = styled(LabelPrimitive.Root, {
	userSelect: 'none',
	color: '$plum4',
})

const selectOptions = [
	{ value: 'current', label: 'Current week' },
	{ value: 'next', label: 'Next week' },
	{ value: 'backlog', label: 'No week set' },
]

interface Props {
	handleSubmit: () => void
}

const TodoForm = ({ handleSubmit }: Props) => {
	const [task, setTask] = useRecoilState(newTaskState)
	const [week, setWeek] = useRecoilState(newWeekState)
	const [dueDate, setDueDate] = useRecoilState(newDueDateState)

	const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value)
	}

	const handleDueDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		//@ts-ignore
		setDueDate(dayjs(event.target.value))
	}

	return (
		<Box>
			<form>
				<Flex css={{ gap: 10, flexDirection: 'column' }}>
					<Flex css={{ gap: 10, alignItems: 'center' }}>
						<StyledLabel htmlFor="task">Task description:</StyledLabel>
						<Input
							id="task"
							name="task"
							type="text"
							value={task}
							onChange={handleTaskChange}
						/>
					</Flex>
					<Flex css={{ gap: 10, alignItems: 'center' }}>
						<StyledLabel htmlFor="dueDate">Due date:</StyledLabel>
						<Input
							id="dueDate"
							name="dueDate"
							type="date"
							value={dueDate ? dayjs(dueDate).format('YYYY-MM-DD') : undefined}
							onChange={handleDueDateChange}
						/>
					</Flex>
					<Flex css={{ gap: 10, alignItems: 'center' }}>
						<StyledLabel htmlFor="week">Week:</StyledLabel>
						<Select options={selectOptions} value={week} setValue={setWeek} />
					</Flex>
				</Flex>
				<Button
					css={{ backgroundColor: 'green', marginTop: 10 }}
					onClick={handleSubmit}
				>
					Add todo
				</Button>
			</form>
		</Box>
	)
}

export default TodoForm
