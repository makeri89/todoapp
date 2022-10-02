import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { green } from '@radix-ui/colors'
import { styled } from '@lib/stitches.config'

const StyledCheckbox = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: '$plum12',
  width: 20,
  height: 20,
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: green.green4 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&:checked': { backgroundColor: green.green4 },
})

const StyledIndicator = styled(Checkbox.Indicator, {
  backgroundColor: 'transparent',
  marginTop: 3,
})

const CustomCheckbox = () => (
  <StyledCheckbox>
    <StyledIndicator>
      <CheckIcon color={green.green12} />
    </StyledIndicator>
  </StyledCheckbox>
)

export default CustomCheckbox
