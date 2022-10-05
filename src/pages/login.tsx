import { Box, Button, Flex, Heading, Input, Separator } from '@ui/atoms'
import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEvent, useState } from 'react'

const Login: NextPage = () => {
  const { status } = useSession()
  const router = useRouter()
  const [email, setEmail] = useState('')

  if (status === 'authenticated') {
    router.replace('/')
  }

  const handleGoogleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    signIn('google')
  }

  const handleEmailLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    signIn('email', { email })
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <Box css={{ textAlign: 'center' }}>
      <Heading level="h1">Login</Heading>
      <Flex
        css={{
          gap: 20,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Input
          placeholder="Your email"
          value={email}
          onChange={handleEmailChange}
        />
        <Button onClick={handleEmailLogin} css={{ padding: 10 }}>
          Login with email
        </Button>
        <Separator css={{ width: 200 }} />
        <Button onClick={handleGoogleLogin} css={{ padding: 10 }}>
          Login with Google
        </Button>
      </Flex>
    </Box>
  )
}

export default Login
