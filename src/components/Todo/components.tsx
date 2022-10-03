import { styled } from '@lib/stitches.config'
import { Box } from '@ui/atoms'

export const Wrapper = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
  gap: 10,
  margin: '15px 0',
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
    status: {
      completed: {
        backgroundColor: '$green5',
      },
      todo: {
        backgroundColor: '$plum5',
      },
    },
  },
  defaultVariants: {
    status: 'todo',
  },
})
