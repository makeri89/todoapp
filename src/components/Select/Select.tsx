import { ChevronDownIcon } from '@radix-ui/react-icons'
import {
	Content,
	ItemText,
	Root,
	StyledIcon,
	StyledItem,
	StyledTrigger,
	StyledViewport,
	Value,
} from './components'

interface Props {
	options: { value: string; label: string }[]
}

const Select = ({ options }: Props) => {
	return (
		<Root>
			<StyledTrigger>
				<Value placeholder="Set week" />
				<StyledIcon>
					<ChevronDownIcon />
				</StyledIcon>
			</StyledTrigger>
			<Content>
				<StyledViewport>
					{options.map((option) => (
						<StyledItem key={option.value} value={option.value}>
							<ItemText>{option.label}</ItemText>
						</StyledItem>
					))}
				</StyledViewport>
			</Content>
		</Root>
	)
}

export default Select
