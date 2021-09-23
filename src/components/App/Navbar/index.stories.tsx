import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Navbar from '.'

export default {
  title: 'App/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: any) => {
  const [value, setValue] = useState('')

  return (
    <Navbar
      searchValue={value}
      onSearchValueChange={(e) => setValue(e.target.value)}
      onSearchSuggestionChange={(id) =>
        setValue(args.searchSuggestions[id - 1].label)
      }
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
    {
      id: 0,
      label: 'item1',
    },
    {
      id: 1,
      label: 'item2',
    },
    {
      id: 2,
      label: 'item3',
    },
    {
      id: 3,
      label: 'item4',
    },
    {
      id: 4,
      label: 'item5',
    },
    {
      id: 5,
      label: 'item6',
    },
    {
      id: 6,
      label: 'item7',
    },
  ],
}
