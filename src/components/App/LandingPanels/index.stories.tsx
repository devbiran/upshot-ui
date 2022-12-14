import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LandingPanel from './'

export default {
  title: 'App/LandingPanels',
  component: LandingPanel,
} as ComponentMeta<typeof LandingPanel>

const Template: ComponentStory<typeof LandingPanel> = (args) => (
  <LandingPanel {...args} />
)

export const Default = Template.bind({})
Default.args = {
  projectType: 'Protocol',
  title: 'Rarible',
  description: 'On-chain lending and borrowing with artwork-as-collateral',
  image:
    'https://cdn.coinranking.com/nft/0x60F80121C31A0d46B5279700f9DF786054aa5eE5/58567.png?size=autox430',
  sx: { width: '350px', height: '192px' },
}

export const Small = Template.bind({})
Small.args = {
  projectType: 'Protocol',
  title: 'Rarible',
  description: 'On-chain lending and borrowing with artwork-as-collateral',
  image:
    'https://cdn.coinranking.com/nft/0x60F80121C31A0d46B5279700f9DF786054aa5eE5/58567.png?size=autox430',
  sx: { width: '220px', height: '90px' },
}

export const SmallNoLinkIcon = Template.bind({})
SmallNoLinkIcon.args = {
  projectType: 'Protocol',
  title: 'Rarible',
  description: 'On-chain lending and borrowing with artwork-as-collateral',
  image:
    'https://cdn.coinranking.com/nft/0x60F80121C31A0d46B5279700f9DF786054aa5eE5/58567.png?size=autox430',
  showLinkIcon: false,
  sx: { width: '220px', height: '90px' },
}

export const PinkHover = Template.bind({})
PinkHover.args = {
  hoverUnderglow: 'pink',
  projectType: 'Protocol',
  title: 'Rarible',
  description: 'On-chain lending and borrowing with artwork-as-collateral',
  image:
    'https://cdn.coinranking.com/nft/0x60F80121C31A0d46B5279700f9DF786054aa5eE5/58567.png?size=autox430',
  showLinkIcon: false,
  sx: { width: '220px', height: '90px' },
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  hoverUnderglow: 'pink',
  projectType: 'Protocol',
  title: 'Rarible',
  description: 'On-chain lending and borrowing with artwork-as-collateral',
  image:
    'https://cdn.coinranking.com/nft/0x60F80121C31A0d46B5279700f9DF786054aa5eE5/58567.png?size=autox430',
  showLinkIcon: false,
  sx: { width: '220px', height: '90px' },
}
