import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { Button } from '../../..'
import Panel from '../../@UI/Panel'
import Icon from '../../@UI/Icon'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import colors from '../../../themes/UpshotUI/colors'
import { transientOptions } from '../../../themes'

interface panelProps {
  $variant: 'wide' | 'popup'
}

export const StyledPanel = styled(Panel, transientOptions)<panelProps>`
  /* Browser support is limited for blurry backdrop: https://caniuse.com/css-backdrop-filter */
  ${({ $variant }) =>
    $variant === 'popup' ? 'backdrop-filter: blur(10px);' : ''}

  /* Make background transparent when variant==popup to see the panel behind it */
  ${({ $variant }) =>
    $variant === 'popup'
      ? 'background-color: ' + transparentize(0.2, colors['grey-800']) + ';'
      : ''}
`

interface buttonProps {
  $width?: string
}

export const StyledButton = styled(Button, transientOptions)<buttonProps>`
  float: right;
  margin-top: 8px;
  ${({ $width }) => ($width !== null ? 'width: ' + $width + ';' : '')}
`

export const StyledText = styled(Text, transientOptions)`
  vertical-align: middle;
`

export const StyledBox = styled(Box, transientOptions)`
  margin-top: 12px;
`

export const StyledIcon = styled(Icon, transientOptions)`
  vertical-align: middle;
  margin-right: 6px;
`
