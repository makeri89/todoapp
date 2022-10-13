import { ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Main = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox checked={checked} handleChange={() => setChecked(!checked)} />
  )
}
