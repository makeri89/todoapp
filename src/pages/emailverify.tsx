import { NextPage } from 'next'
import { Box, Heading } from '@ui/atoms'

const EmailVerify: NextPage = () => {
  return (
    <Box css={{ textAlign: 'center', paddingTop: '20vh' }}>
      <Heading level="h1">Please check your email for a login link.</Heading>
    </Box>
  )
}

export default EmailVerify
