import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './'
import Icon from '../Icon'

export default {
  title: '@UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}> Button </Button>
)

const MinimizedTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  disabled: true,
}

export const PrimaryFixedWidth = Template.bind({})
PrimaryFixedWidth.args = {
  width: 135,
}

export const PrimaryIcon = Template.bind({})
PrimaryIcon.args = {
  icon: <Icon icon="analytics" />,
}

export const PrimaryIconFixedWidth = Template.bind({})
PrimaryIconFixedWidth.args = {
  icon: <Icon icon="analytics" />,
  width: 135,
}

export const PrimaryIconMinimized = MinimizedTemplate.bind({})
PrimaryIconMinimized.args = {
  icon: <Icon icon="analytics" />,
}

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  size: 'lg',
  icon: <Icon icon="analytics" />,
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
  type: 'secondary',
  disabled: true,
}

export const SecondaryFixedWidth = Template.bind({})
SecondaryFixedWidth.args = {
  type: 'secondary',
  width: 135,
}

export const SecondaryIcon = Template.bind({})
SecondaryIcon.args = {
  type: 'secondary',
  icon: <Icon icon="attention" />,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
}

export const TertiaryDisabled = Template.bind({})
TertiaryDisabled.args = {
  type: 'tertiary',
  disabled: true,
}

export const TertiaryFixedWidth = Template.bind({})
TertiaryFixedWidth.args = {
  type: 'tertiary',
  width: 135,
}

export const TertiaryIcon = Template.bind({})
TertiaryIcon.args = {
  type: 'tertiary',
  icon: <Icon icon="attention" />,
}

export const Plain = Template.bind({})
Plain.args = {
  type: 'plain',
}

export const PlainIcon = Template.bind({})
PlainIcon.args = {
  type: 'plain',
  icon: <Icon icon="arrowKeyRight" />,
}

export const PlainDisabled = Template.bind({})
PlainDisabled.args = {
  type: 'plain',
  disabled: true,
}