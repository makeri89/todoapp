import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

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
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default MyApp
