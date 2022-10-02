import { Flex } from '@ui/atoms'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from './components'
import { Cross2Icon } from '@radix-ui/react-icons'
import { orange } from '@radix-ui/colors'

interface Props {
	trigger: React.ReactNode
	children: React.ReactNode
	title: string
}

const Modal = ({ trigger, title, children }: Props) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent size={{ '@initial': 'small', '@md': 'md' }}>
				<Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
					<DialogTitle>{title}</DialogTitle>
					<DialogClose asChild>
						<Cross2Icon
							color={orange.orange10}
							style={{ width: 30, height: 30, cursor: 'pointer' }}
						/>
					</DialogClose>
				</Flex>
				{children}
			</DialogContent>
		</Dialog>
	)
}

export default Modal
