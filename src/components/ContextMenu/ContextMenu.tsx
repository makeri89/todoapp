import { styled } from '@stitches/react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'

interface Props {
	children: React.ReactNode
}

const ContextMenu = ContextMenuPrimitive.Root
const Trigger = ContextMenuPrimitive.Trigger
const Portal = ContextMenuPrimitive.Portal
const Content = ContextMenuPrimitive.Content
const Item = ContextMenuPrimitive.Item

const Box = styled('div', {})

const CustomContextMenu = ({ children }: Props) => {
	return (
		<Box>
			<ContextMenu>
				<Trigger>{children}</Trigger>
				<Portal>
					<Content>
						<Item>Set deadline date</Item>
						<Item>Schedule for this week</Item>
						<Item>Schedule for next week</Item>
					</Content>
				</Portal>
			</ContextMenu>
		</Box>
	)
}

export default CustomContextMenu