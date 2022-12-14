import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MiniNftCard from '.'
import { Flex, Box } from 'theme-ui'

export default {
  title: '@UI/MiniNftCard',
  component: MiniNftCard,
} as ComponentMeta<typeof MiniNftCard>

const Template1: ComponentStory<typeof MiniNftCard> = (args) => {
  return (
    <Flex>
      <Box m={2}>
        <MiniNftCard {...args} onClick={() => {}} />
      </Box>
      <Box m={2}>
        <MiniNftCard {...args} />
      </Box>
      <Box m={2}>
        <MiniNftCard {...args} />
      </Box>
    </Flex>
  )
}

const Template: ComponentStory<typeof MiniNftCard> = (args) => (
  <MiniNftCard {...args} />
)

export const ErrorDefault = Template.bind({})
ErrorDefault.args = {
  error: true,
}

export const ErrorSearch = Template.bind({})
ErrorSearch.args = {
  error: true,
  type: 'search',
}

export const Default = Template1.bind({})
Default.args = {
  image:
    'http://res.cloudinary.com/upshot-inc/image/upload/v1631374250/ycyzvzym0fagfd8z3b9l.png',
  name: 'nft name',
  price: '$69',
  date: '08/25/2021',
  from: '0xce..ea4',
  to: '0xdf...4a1',
  link: 'https://google.com',
}

export const DefaultRecommends = Template1.bind({})
DefaultRecommends.args = {
  image:
    'http://res.cloudinary.com/upshot-inc/image/upload/v1631374250/ycyzvzym0fagfd8z3b9l.png',
  name: 'nft name',
  price: '$69',
  type: 'recommend',
  appraisal: '$334',
  date: '08/25/2021',
  from: '0xce..ea4',
  to: '0xdf...4a1',
  link: 'https://google.com',
}

export const DefaultRecommendListing = Template1.bind({})
DefaultRecommendListing.args = {
  image:
    'https://res.cloudinary.com/upshot-inc/image/upload/v1628115613/wmhbovutsfzp0wppi7qh.png',
  name: 'nft name',
  price: '$69',
  type: 'recommend',
  listing: '$333',
  date: '08/25/2021',
  from: '0xce..ea4',
  to: '0xdf...4a1',
  pixelated: true,
  link: 'https://google.com',
}

export const DefaultPixelated = Template1.bind({})
DefaultPixelated.args = {
  image:
    'https://res.cloudinary.com/upshot-inc/image/upload/v1628115613/wmhbovutsfzp0wppi7qh.png',
  name: 'nft name',
  price: '$69',
  date: '08/25/2021',
  from: '0xce..ea4',
  to: '0xdf...4a1',
  pixelated: true,
  link: 'https://google.com',
}

export const DefaultLongName = Template.bind({})
DefaultLongName.args = {
  image: 'https://www.stockvault.net/data/2012/09/24/135964/preview16.jpg',
  name: 'Very long NFT name that take up all of the space.Very long NFT name that take up all of the space.',
  price: '$420',
  date: '08/25/2021',
  from: '0xce..ea4',
  to: '0xdf...4a1',
  link: 'https://google.com',
}

export const DefaultCollectionType = Template.bind({})
DefaultCollectionType.args = {
  image: 'https://www.stockvault.net/data/2012/09/24/135964/preview16.jpg',
  name: 'NFT name',
  price: '$420',
  sales: '130',
  type: 'collection',
  floorPrice: '120.00',
  link: 'https://google.com',
  tooltip: 'volume / day',
}

export const Search = Template.bind({})
Search.args = {
  image:
    'https://digitalax.mypinata.cloud/ipfs/QmYftLKLJn4T8GxjwThSJwGcZYop23mc5WkW17K7bi2Ua3',
  name: 'nft name',
  price: '$100.42',
  creator: 'creator',
  rarity: '45%',
  type: 'search',
  priceType: 'appraisal',
  link: 'https://google.com',
}

export const SearchLongName = Template.bind({})
SearchLongName.args = {
  image:
    'https://digitalax.mypinata.cloud/ipfs/QmYftLKLJn4T8GxjwThSJwGcZYop23mc5WkW17K7bi2Ua3',
  name: 'Very long NFT name that take up all of the space.Very long NFT name that take up all of the space.',
  creator: 'Very long NFT name that take up all of the space.',
  price: '$100,000',
  date: '08/25/2021',
  rarity: '62.5%',
  type: 'search',
  priceType: 'listed',
  link: 'https://google.com',
}
