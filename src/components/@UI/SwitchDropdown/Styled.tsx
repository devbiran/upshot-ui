import styled from '@emotion/styled'
import { transientOptions } from '../../../themes'

import Box from '../../Layout/Box'

interface SwitchDropdownHeaderProps {
  open: boolean
}

interface SwitchDropdownOptionsProps {
  open: boolean
}

export const SwitchDropdownWrapper = styled(Box, transientOptions)`
  position: relative;
`

export const SwitchDropdownHeader = styled(
  'div',
  transientOptions
)<SwitchDropdownHeaderProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;
    transform: rotate(${({ open }) => (open ? '180' : '0')}deg);
    transition: ${({ theme }) => theme.transitions.default};

    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const SwitchDropdownOptions = styled(
  'div',
  transientOptions
)<SwitchDropdownOptionsProps>`
  position: absolute;
  width: 100%;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  transition: ${({ theme }) => theme.transitions.default};
`

export const SwitchDropdownOption = styled('div', transientOptions)`
  cursor: pointer;
  white-space: nowrap;
`
