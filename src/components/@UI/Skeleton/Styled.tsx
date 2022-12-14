import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import { transientOptions } from '../../../themes'

interface StyledSkeletonProps {
  $circle: boolean
}

const minWidth = '10px'
const minHeight = '10px'

export const StyledSkeleton = styled(
  Box,
  transientOptions
)<StyledSkeletonProps>`
  background: ${({ theme }) => theme.colors['grey-700']};
  min-width: ${minWidth};
  min-height: ${minHeight};
  border-radius: ${({ theme, $circle }) =>
    $circle === true ? theme.radii.circle : theme.radii.md};
  animation: ${({ theme }) => theme.animations.pulse};
`
