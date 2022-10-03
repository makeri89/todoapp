import { styled } from '@lib/stitches.config'
import { Box } from '@ui/atoms'

export const Wrapper = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
  gap: 10,
  margin: '15px 0',
  backgroundColor: '$plum5',
  borderRadius: 15,
  textAlign: 'left',
  padding: '20px 30px',
  variants: {
    size: {
      small: {
        width: 'calc(90vw - 60px)',
      },
      md: {
        width: 300,
      },
    },
  },
})
