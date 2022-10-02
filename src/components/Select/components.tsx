import * as SelectPrimitive from '@radix-ui/react-select'

import { styled } from '@lib/stitches.config'

export const StyledTrigger = styled(SelectPrimitive.Trigger, {
  all: 'unset',
  backgroundColor: '$plum12',
  borderRadius: 6,
  padding: 8,
  color: '$plum7',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  cursor: 'pointer',
  minWidth: 120,
})

export const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: '$plum7',
})

export const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: '$plum12',
  borderRadius: 6,
  color: '$plum7',
  borderColor: '$plum7',
  border: '1px solid',
})

export const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: '10px 0',
  color: '$plum7',
})

export const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  lineHeight: 1,
  color: '$plum7',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '5px 0px 5px 10px',
  position: 'relative',
  userSelect: 'none',

  '&[data-highlighted]': {
    backgroundColor: '$purple11',
    color: '$plum7',
    cursor: 'pointer',
  },
})

export const ItemText = SelectPrimitive.ItemText

interface ContentProps {
  children: React.ReactNode
}

export const Content = ({ children, ...props }: ContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}

export const Root = SelectPrimitive.Root
export const Value = SelectPrimitive.Value
