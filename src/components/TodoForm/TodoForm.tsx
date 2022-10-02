import { Box, Flex, Input } from '@ui/atoms'
import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from '@lib/stitches.config'
import Select from '@ui/Select'

const StyledLabel = styled(LabelPrimitive.Root, {
	userSelect: 'none',
	color: '$plum4',
})

const selectOptions = [
	{ value: 'current', label: 'Current week' },
	{ value: 'next', label: 'Next week' },
	{ value: 'backlog', label: 'No week set' },
]

const TodoForm = () => {
	return (
		<Box>
			<form>
				<Flex css={{ gap: 10, flexDirection: 'column' }}>
					<Flex css={{ gap: 10, alignItems: 'center' }}>
						<StyledLabel htmlFor="task">Task description:</StyledLabel>
						<Input id="task" name="task" type="text" />
					</Flex>
					<Flex css={{ gap: 10, alignItems: 'center' }}>
						<StyledLabel htmlFor="dueDate">Due date:</StyledLabel>
						<Input id="dueDate" name="dueDate" type="date" />
					</Flex>
					<Flex css={{ gap: 10, alignItems: 'center' }}>
						<StyledLabel htmlFor="week">Week:</StyledLabel>
						<Select options={selectOptions} />
					</Flex>
				</Flex>
			</form>
		</Box>
	)
}

export default TodoForm
