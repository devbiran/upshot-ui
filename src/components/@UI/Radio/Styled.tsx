import styled from '@emotion/styled'
import {
  RadioProps,
} from 'theme-ui'

interface StyledRadioProps extends RadioProps {
  $hideRadio: boolean
}

export const StyledWrapper = styled.div<StyledRadioProps>`
  ${({ $hideRadio }) => $hideRadio === true
  ? 'display: none;'
  : ''}
`