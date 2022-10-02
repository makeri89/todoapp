import {
	grayDark,
	blueDark,
	redDark,
	greenDark,
	plumDark,
} from '@radix-ui/colors'

import { createStitches } from '@stitches/react'

export const { styled, createTheme, globalCss, keyframes } = createStitches({
	theme: {
		colors: {
			...grayDark,
			...blueDark,
			...redDark,
			...greenDark,
			...plumDark,
		},
	},
	media: {
		md: '(min-width: 640px)',
	},
})

export const globalStyles = globalCss({
	body: {
		fontFamily: 'Raleway',
		background: '$gray1',
		color: '$gray12',
	},
})
