import { Button } from '@ui/atoms'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from './components'

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
				<DialogTitle>{title}</DialogTitle>
				{children}
				<DialogClose asChild>
					<Button css={{ backgroundColor: 'green', margin: 10 }}>Add</Button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	)
}

export default Modal
