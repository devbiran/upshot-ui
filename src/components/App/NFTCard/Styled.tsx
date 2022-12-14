import styled from '@emotion/styled'
import Panel from '../../@UI/Panel'
import Image from '../../@UI/Image'
import colors from '../../../themes/UpshotUI/colors'
import { Flex } from 'theme-ui'
import { transientOptions } from '../../../themes'

type NFTCardImageProps = {
  $isPixelated: boolean
}

type NFTCardProps = {
  $hoverUnderglow: keyof typeof colors
}

type NFTDealBadgeProps = {
  $percentDifference?: number
}

export const NFTCardBase = styled(Flex, transientOptions)<NFTCardProps>`
  flex-direction: column;
  gap: 4;
  align-items: center;
  position: static;
  height: min-content;
  top: 160px;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors['grey-800']};
  -webkit-transform: translateZ(0); /* Trim overflow with translated layer. */

  &:hover {
    box-shadow: ${({ theme, $hoverUnderglow }) =>
      theme.shadow.underglow($hoverUnderglow)};
  }
`

export const NFTCardImage = styled(Image, transientOptions)<NFTCardImageProps>`
  width: 100%;
  image-rendering: ${({ $isPixelated }) => ($isPixelated ? 'pixelated' : '')};
  pointer-events: none;
  border-radius: ${({ theme }) => `${theme.radii.sm} ${theme.radii.sm} 0 0`};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

export const NFTCardDetails = styled(Flex, transientOptions)`
  flex-direction: row;
  align-items: space-between;
`

export const DealBadge = styled(Panel, transientOptions)<NFTDealBadgeProps>`
  border-radius: ${({ theme }) => theme.radii.xs};
  background-color: ${({ theme, $percentDifference }) =>
    $percentDifference > 0 ? theme.colors['greenLabel'] : theme.colors['red']};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  position: absolute;
  top: 7px;
  right: 7px;
  max-width: 80%;
  z-index: 2;
  line-height: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
