import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '../Table'
import TableBody from '../TableBody'
import TableItem from '../TableItem'
import TableCell from './'

export default {
  title: 'Layout/TableCell',
  component: TableCell,
  argTypes: {
    children: {
      description: 'Slot for inner content.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof TableCell>

const Template: ComponentStory<typeof TableCell> = (args) => (
  <Table sx={{ p: 4, bg: 'background' }}>
    <TableBody>
      <TableItem>
        <TableCell {...args} />
      </TableItem>
    </TableBody>
  </Table>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Content',
}
