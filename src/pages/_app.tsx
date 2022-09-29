import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { globalStyles } from '../stitches.config'

interface CustomAppProps extends AppProps {
	pageProps: CustomPageProps
}

interface CustomPageProps {
	session: any
}

const MyApp = ({
	Component,
	pageProps: { session, ...pageProps },
}: CustomAppProps) => {
	globalStyles()

	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default MyApp
