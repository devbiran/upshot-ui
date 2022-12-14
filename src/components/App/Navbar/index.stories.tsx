import React, { useState, useRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from '../../@UI/Modal'
import Navbar from '.'
import ConnectModal from '../ConnectModal'
import HelpModal from '../HelpModal'

export default {
  title: 'App/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: any) => {
  const [value, setValue] = useState('')
  const [connectOpen, setConnectOpen] = useState(false)
  const [blackOpen, setBlackOpen] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)
  const modalRef = useRef(null)
  const helpModalRef = useRef(null)
  const toggleConnectModal = () => setConnectOpen(!connectOpen)
  const toggleHelpModal = () => setShowHelpModal(!showHelpModal)

  const handleConnect = (provider: string) => {
    console.info(`Connect to: ${provider}`)
    modalRef?.current?.click()
  }

  return (
    <>
      <Navbar
        onConnectClick={toggleConnectModal}
        searchValue={value}
        onSearchValueChange={(e) =>
          setValue((e.target as HTMLInputElement).value)
        }
        onSearchSuggestionChange={(item) =>
          setValue(args.searchSuggestions[item.id - 1].label)
        }
        onSearch={(e) => {
          console.log({ value })
        }}
        onMenuClick={() => setShowSidebar(!showSidebar)}
        onHelpClick={() => setShowHelpModal(!showHelpModal)}
        showSidebar={showSidebar}
        notifications={args.notifications}
        {...args}
      />
      <Modal
        ref={modalRef}
        onClose={toggleConnectModal}
        {...{ open: connectOpen }}
      >
        <ConnectModal onConnect={handleConnect} {...args} />
      </Modal>
      <Modal
        ref={helpModalRef}
        onClose={toggleHelpModal}
        {...{ open: showHelpModal }}
      >
        <HelpModal link="" onClose={() => setShowHelpModal(!showHelpModal)} />
      </Modal>
    </>
  )
}

const searchSuggestions = [
  {
    id: 0,
    name: 'item1',
  },
  {
    id: 1,
    name: 'item2',
  },
  {
    id: 2,
    name: 'item3',
  },
  {
    id: 3,
    name: 'item4',
  },
  {
    id: 4,
    name: 'item5',
  },
  {
    id: 5,
    name: 'item6',
  },
  {
    id: 6,
    name: 'item7',
  },
]

export const Default = Template.bind({})
Default.args = {
  ensName: 'emmons.eth',
  address: '0x123400000000000000000000000000000000abcd',
  searchSuggestions,
}

export const Notifications = Template.bind({})
Notifications.args = {
  ensName: 'emmons.eth',
  address: '0x123400000000000000000000000000000000abcd',
  searchSuggestions,
  notifications: ['notif1', 'notif2'],
  showNotifs: true,
}

export const ENSUnavailable = Template.bind({})
ENSUnavailable.args = {
  address: '0x123400000000000000000000000000000000abcd',
  searchSuggestions,
}

export const ConnectWallet = Template.bind({})
ConnectWallet.args = {
  searchSuggestions,
}
