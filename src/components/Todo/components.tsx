import { styled } from '@lib/stitches.config'
import { Flex } from '@ui/atoms'

export const Wrapper = styled(Flex, {
  alignItems: 'center',
  gap: 10,
  margin: '15px 0',
  backgroundColor: '$plum5',
  width: 300,
  borderRadius: 15,
  variants: {
    size: {
      small: {
        width: 'calc(90vw - 60px)',
        padding: '20px 30px',
      },
      md: {
        width: 300,
        padding: '40px 30px',
      },
    },
  },
})
