import { Box, Button, Heading } from '@ui/atoms'
import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'

const Login: NextPage = () => {
  const { status } = useSession()
  const router = useRouter()

  if (status === 'authenticated') {
    router.replace('/')
  }

  const handleGoogleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    signIn('google')
  }
  return (
    <Box css={{ textAlign: 'center' }}>
      <Heading level="h1">Login</Heading>
      <Button onClick={handleGoogleLogin} css={{ padding: 10 }}>
        Login with Google
      </Button>
    </Box>
  )
}

export default Login
