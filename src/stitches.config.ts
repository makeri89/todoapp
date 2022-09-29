import {
	grayDark,
	blueDark,
	redDark,
	greenDark,
	plumDark,
} from '@radix-ui/colors'

import { createStitches } from '@stitches/react'

export const { styled, createTheme, globalCss } = createStitches({
	theme: {
		colors: {
			...grayDark,
			...blueDark,
			...redDark,
			...greenDark,
			...plumDark,
		},
	},
})

export const globalStyles = globalCss({
	'*': {
		background: '$gray1',
		color: '$gray12',
	},
	body: {
		fontFamily: 'Raleway',
	},
})
