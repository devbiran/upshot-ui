import React, { ReactNode, forwardRef } from 'react'
import ErrorSvg from '../../../assets/svg/icons/Error.svg'
import {
  CollectionButtonWrapper,
  CollectionButtonTextWrapper,
  CollectionButtonText,
  CollectionButtonSubText,
  CollectionButtonIcon,
} from './Styled'

export interface CollectionButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subText: string
  icon: ReactNode
  highlight?: 'blue' | 'pink' | 'red' | 'green' | 'yellow' | 'grey'
  error?: boolean
}

const CollectionButton = (
  {
    text,
    subText,
    icon,
    highlight,
    error = false,
    ...props
  }: CollectionButtonProps,
  ref: React.RefObject<HTMLDivElement>
) => {
  if (error) {
    return (
      <CollectionButtonWrapper {...{ ref, ...props }}>
        <CollectionButtonIcon>
          <img src={ErrorSvg} />
        </CollectionButtonIcon>
        <CollectionButtonTextWrapper>
          <CollectionButtonText>Error</CollectionButtonText>
          <CollectionButtonSubText>Error loading data</CollectionButtonSubText>
        </CollectionButtonTextWrapper>
      </CollectionButtonWrapper>
    )
  }

  return (
    <CollectionButtonWrapper {...{ highlight, ref, ...props }}>
      <CollectionButtonIcon>{icon}</CollectionButtonIcon>
      <CollectionButtonTextWrapper>
        <CollectionButtonText>{text}</CollectionButtonText>
        <CollectionButtonSubText>{subText}</CollectionButtonSubText>
      </CollectionButtonTextWrapper>
    </CollectionButtonWrapper>
  )
}

export default forwardRef(CollectionButton)