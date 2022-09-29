import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { globalCss } from '../stitches.config'

interface CustomAppProps extends AppProps {
	pageProps: CustomPageProps
}

interface CustomPageProps {
	session: any
}

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: CustomAppProps) {
	const globalStyles = globalCss({
		'*': {
			background: '$gray1',
			color: '$gray12',
		},
	})
	globalStyles()
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default MyApp
