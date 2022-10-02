import { styled } from '@lib/stitches.config'

interface Props {
	level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: React.ReactNode
}

export const Heading = ({ level, children, ...props }: Props) => {
	const HeadingBase = styled(level, { ...props })

	return <HeadingBase>{children}</HeadingBase>
}
