import { styled } from '@lib/stitches.config'
import { Box } from '@ui/atoms'

export const Wrapper = styled(Box, {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  gap: 10,
  margin: '15px 0',
  borderRadius: 15,
  textAlign: 'left',
  padding: '15px 25px',
  color: '$gray12',
  variants: {
    size: {
      small: {
        width: 'calc(90vw - 60px)',
        padding: '10px 20px',
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
