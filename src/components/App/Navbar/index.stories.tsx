import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Navbar from '.'

export default {
  title: 'App/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => {
  const [value, setValue] = useState('')

  return (
    <Navbar
      searchValue={value}
      onSearchValueChange={(e) => setValue(e.target.value)}
      onSearchSuggestionChange={(v) => setValue(v)}
      onSearch={(e) => {
        console.log({ value })
      }}
      {...args}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  searchSuggestions: [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
  ],
}
