import { styled } from '@lib/stitches.config'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$gray10',
  '&[data-orientation=horizontal]': { height: 1 },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
})

export const Separator = StyledSeparator
