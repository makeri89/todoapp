import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { globalStyles } from '@lib/stitches.config'
import { RecoilRoot } from 'recoil'

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
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</SessionProvider>
	)
}

export default MyApp
