import { styled } from '@lib/stitches.config'
import { plum, blackA, mauve, grass, indigo } from '@radix-ui/colors'

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  // padding: '10px 25px',
  fontWeight: 600,
  cursor: 'pointer',
  variants: {
    variant: {
      plum: {
        backgroundColor: 'white',
        color: plum.plum11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: grass.grass11,
        color: 'white',
      },
      indigo: {
        backgroundColor: indigo.indigo11,
        color: 'white',
      },
    },
    size: {
      sm: {
        fontSize: 14,
        padding: '5px 10px',
      },
      md: {
        padding: '10px 25px',
      },
    },
  },
  defaultVariants: {
    variant: 'plum',
    size: 'md',
  },
})
