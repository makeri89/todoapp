import { styled } from '@lib/stitches.config'

export const Button = styled('button', {
	all: 'unset',
	cursor: 'pointer',
	borderRadius: 15,
	padding: '5px 20px',
	'&:hover': {
		backgroundColor: '$plum3',
	},
})
