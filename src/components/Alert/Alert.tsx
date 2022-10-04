import { Button, Flex } from '@ui/atoms'
import {
  Action,
  AlertDialog,
  Content,
  Close,
  Description,
  Title,
  Trigger,
} from './components'

interface Props {
  title: string
  description?: string
  successHandler: React.MouseEventHandler<HTMLButtonElement>
  trigger: React.ReactNode
}

const Alert = ({ title, description, successHandler, trigger }: Props) => {
  return (
    <AlertDialog>
      <Trigger asChild>{trigger}</Trigger>
      <Content size={{ '@initial': 'small', '@md': 'md' }}>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        <Flex css={{ justifyContent: 'flex-end', gap: 15 }}>
          <Close asChild>
            <Button>Cancel</Button>
          </Close>
          <Action asChild>
            <Button variant="green" onClick={successHandler}>
              Confirm
            </Button>
          </Action>
        </Flex>
      </Content>
    </AlertDialog>
  )
}

export default Alert
