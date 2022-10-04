import { styled, keyframes } from '@lib/stitches.config'
import { blackA } from '@radix-ui/colors'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: '0 0 10px 0',
  fontWeight: 600,
  color: '$plum4',
})

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  color: '$plum4',
})

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 50,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
  variants: {
    size: {
      small: {
        height: '100vh',
        paddingTop: '50vh',
      },
      md: {
        height: 'initial',
      },
    },
  },
})

interface ContentProps {
  children: React.ReactNode
  size: any
}

const AlertContent = ({ children, size, ...props }: ContentProps) => {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent size={size} {...props}>
        {children}
      </StyledContent>
    </AlertDialogPrimitive.Portal>
  )
}

export const AlertDialog = AlertDialogPrimitive.Root
export const Trigger = AlertDialogPrimitive.Trigger
export const Title = StyledTitle
export const Description = StyledDescription
export const Content = AlertContent
export const Action = AlertDialogPrimitive.Action
export const Close = AlertDialogPrimitive.Cancel
