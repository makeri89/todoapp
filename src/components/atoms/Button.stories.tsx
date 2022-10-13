import { ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Plum = () => <Button>Plum variant</Button>

export const Green = () => <Button variant="green">Green variant</Button>

export const Indigo = () => <Button variant="indigo">Indigo variant</Button>

export const Small = () => <Button size="sm">Small size</Button>

export const Medium = () => <Button size="md">Medium size</Button>

export const PlumSmall = () => (
  <Button size="sm" variant="plum">
    Plum small
  </Button>
)

export const GreenSmall = () => (
  <Button size="sm" variant="green">
    Green small
  </Button>
)

export const IndigoSmall = () => (
  <Button size="sm" variant="indigo">
    Indigo small
  </Button>
)
