import React, { forwardRef } from 'react'
import { ButtonProps, Link } from 'theme-ui'

import { PanelProps } from '../../@UI/Panel'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import colors from '../../../themes/UpshotUI/colors'
import {
  StyledPanel,
  StyledButton,
  StyledText,
  StyledBox,
  StyledIcon,
} from './Styled'

export interface BuyButtonProps extends ButtonProps {
  /**
   * Button URL
   */
  url?: string
  /**
   * Button width
   */
  width?: string
}

const BuyButton = forwardRef(
  ({ url, width = null, ...props }: BuyButtonProps) => (
    <Link href={url} target="_blank">
      <StyledButton
        variant="secondary"
        size="md"
        capitalize={true}
        $width={width}
      >
        <StyledIcon icon="openSeaBlock" color="white" size={16} />
        <StyledText color="white">Buy on Opensea</StyledText>
      </StyledButton>
    </Link>
  )
)

export interface OpenseaPanelProps extends PanelProps {
  /**
   * Variant: wide or popup. Default: wide. The popup variant has 20% transparency and blurry backdrop.
   */
  variant?: 'wide' | 'popup'
  /**
   * List price in ETH
   */
  listPriceETH: number
  /**
   * List price in USD
   */
  listPriceUSD?: number
  /**
   * Appraisal price in ETH
   */
  appraisalPriceETH: number
  /**
   * Opensea URL
   */
  openseaUrl: string
}

/**
 * Provides wide and popup Opensea panels.
 */
const OpenseaPanel = forwardRef(
  (
    {
      variant = 'wide',
      listPriceETH,
      listPriceUSD,
      appraisalPriceETH,
      openseaUrl,
      ...props
    }: OpenseaPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    let isUnderPriced
    if (listPriceETH <= appraisalPriceETH) {
      isUnderPriced = true
    } else {
      isUnderPriced = false
    }

    const textColor = 'green' as keyof typeof colors
    const title = 'Underpriced'
    const belowOrAbove = 'below'
    let buttonPosition
    if (variant === 'wide' && isMobile === false) {
      buttonPosition = 'right'
    } else {
      buttonPosition = 'bottom'
    }
    const percentage = (listPriceETH / appraisalPriceETH) * 100

    return (
      <StyledPanel $variant={variant} {...props}>
        {buttonPosition === 'right' && <BuyButton url={openseaUrl} />}

        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {isUnderPriced && (
            <Box>
              <StyledIcon icon="upshot" color={textColor} size={16} />
              <StyledText color={textColor} variant="large">
                {title}
              </StyledText>
            </Box>
          )}

          <StyledBox>
            <Text color="grey-500">
              {variant === 'wide' && 'Listed'}
              {variant === 'popup' && 'This NFT is listed'}
            </Text>
            &nbsp; {variant === 'popup' && <br />}
            <Text color={textColor}>
              {percentage}% {belowOrAbove} appraisal price
            </Text>
            &nbsp; {variant === 'popup' && <br />}
            <Text color="grey-500">at</Text>
            &nbsp;
            <Text color="grey-400">
              Ξ{listPriceETH} {listPriceUSD > 0 && '($' + listPriceUSD + ')'}
            </Text>
          </StyledBox>
          {buttonPosition === 'bottom' && (
            <BuyButton url={openseaUrl} width="100%" />
          )}
        </Flex>
      </StyledPanel>
    )
  }
)

export default OpenseaPanel