import React, { forwardRef } from 'react'
import { ContainerBase } from './Styled'
import { FlexProps } from 'theme-ui'

export interface ContainerProps extends FlexProps {}

/**
 * Provides a centered layout container with mobile-first breakpoints.
 */
const Container = (
  { ...props }: ContainerProps,
  ref: React.RefObject<HTMLDivElement>
) => <ContainerBase {...{ ref, ...props }} />

export default forwardRef(Container)