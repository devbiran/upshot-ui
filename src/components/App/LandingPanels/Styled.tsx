import styled from '@emotion/styled'

import Text from '../../@UI/Text'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import Panel from '../../@UI/Panel'
import { transientOptions } from '../../..//themes'

interface sizeProps {
  $isBig?: boolean
  $disabled?: boolean
}

export const StyledPanel = styled(Panel, transientOptions)<sizeProps>`
  padding: ${({ $isBig }) => ($isBig == true ? '27px' : '22px')};
  height: 100%;
  &:hover {
    background-color: ${({ theme, $disabled }) =>
      $disabled === false ? theme.colors.black : ''} !important;
  }
`
export const StyledAvatar = styled(Avatar, transientOptions)`
  float: left;
  margin-right: 14px;
`
export const StyledText = styled(Text, transientOptions)`
  display: block;
  margin-top: 2px;
`

export const StyledIcon = styled(Icon, transientOptions)`
  float: right;
`

export const StyledDescription = styled(Text, transientOptions)<sizeProps>`
  display: block;
  margin-top: ${({ $isBig }) => ($isBig == true ? '50px' : '10px')};
  ${({ $isBig }) =>
    $isBig == true
      ? ''
      : 'white-space: nowrap; text-overflow: ellipsis; overflow: hidden;'}
`
