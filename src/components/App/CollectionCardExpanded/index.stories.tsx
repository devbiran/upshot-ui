import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CollectionCardExpanded from './'

export default {
  title: 'App/CollectionCardExpanded',
  component: CollectionCardExpanded,
} as ComponentMeta<typeof CollectionCardExpanded>

const Template: ComponentStory<typeof CollectionCardExpanded> = (args) => (
  <CollectionCardExpanded {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'Bored Ape Yacht Club',
  total: 25,
  items: [...new Array(25)].map((_, idx) => ({
    id: String(idx),
    avatarImage: '/img/defaultAvatar.png',
    imageSrc: `/img/sample_nft_${(idx % 3) + 1}.jpg`,
    collection: 'Bored Ape Yacht Club',
    name: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
    listPriceEth: 3,
    listPriceUSD: 300,
    appraisalPriceETH: 4,
    appraisalPriceUSD: 2000,
  })),
  onClose: () => console.log('Close'),
  onFetchMore: () => console.log('Fetch more'),
}

export const Expanded = Template.bind({})
Expanded.args = {
  name: 'Bored Ape Yacht Club',
  total: 25,
  items: [...new Array(25)].map((_, idx) => ({
    id: String(idx),
    expanded: true,
    avatarImage: '/img/defaultAvatar.png',
    imageSrc: `/img/sample_nft_${(idx % 3) + 1}.jpg`,
    collection: 'Bored Ape Yacht Club',
    name: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
    listPriceEth: 3,
    listPriceUSD: 300,
    appraisalPriceETH: 4,
    appraisalPriceUSD: 2000,
  })),
  onClose: () => console.log('Close'),
  onFetchMore: () => console.log('Fetch more'),
}
