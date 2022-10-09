import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { styled } from '@lib/stitches.config'
import { plum } from '@radix-ui/colors'

const StyledContent = styled(ContextMenuPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  padding: 10,
})

export const Content = ({ ...props }) => {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledContent {...props} />
    </ContextMenuPrimitive.Portal>
  )
}

export const Item = styled(ContextMenuPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: plum.plum11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px 0 10px',
  userSelect: 'none',
  '&[data-highlighted]': {
    backgroundColor: plum.plum9,
    color: 'white',
  },
})

export const ContextMenu = ContextMenuPrimitive.Root
export const Trigger = ContextMenuPrimitive.Trigger
