import React, { forwardRef } from 'react'
import {
  FooterLine,
  StyledBoxMiddleSeparate,
  StyledBox,
  StyledBoxLeft,
  StyledBoxRight,
  StyledBoxMiddle,
  LogoBox,
  StyledMiddleLink,
} from './Styled'
import Flex from '../../Layout/Flex'
import { FlexProps, Link } from 'theme-ui'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import Box from '../../Layout/Box'

export interface FooterProps extends FlexProps {
  /**
   * Sidebar is visible.
   */
  sidebarVisible?: boolean
}

/**
 * Footer at the bottom of the application.
 */
const Footer = forwardRef(
  (
    { sidebarVisible = false, ...props }: FooterProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Box>
        <FooterLine {...{ ref, ...props }}>
          <StyledBoxLeft>
            <LogoBox href="https://upshot.xyz/" target="_blank">
              Upshot
            </LogoBox>
            <StyledBox>
              <Flex>
                <StyledMiddleLink href="/whitepaper.pdf" target="_blank">
                  Whitepaper
                </StyledMiddleLink>
                <StyledBoxMiddleSeparate>|</StyledBoxMiddleSeparate>
                <StyledMiddleLink href="/privacy.pdf" target="_blank">
                  Privacy
                </StyledMiddleLink>
                <StyledBoxMiddleSeparate>|</StyledBoxMiddleSeparate>
                <StyledMiddleLink href="/terms.pdf" target="_blank">
                  Terms
                </StyledMiddleLink>
              </Flex>
            </StyledBox>
          </StyledBoxLeft>
          {!sidebarVisible && (
            <StyledBoxRight>
              <Flex>
                <StyledBoxMiddle>
                  <Link
                    href="https://mirror.xyz/0x82FE4757D134a56BFC7968A0f0d1635345053104"
                    target="_blank"
                  >
                    <IconButton>
                      <Icon color="grey-700" icon="mirror" size={24} />
                    </IconButton>
                  </Link>
                </StyledBoxMiddle>
                <StyledBoxMiddle>
                  <Link href="https://twitter.com/upshothq" target="_blank">
                    <IconButton>
                      <Icon color="grey-700" icon="twitterCircle" size={24} />
                    </IconButton>
                  </Link>
                </StyledBoxMiddle>
                <StyledBoxMiddle>
                  <Link href="https://discord.gg/upshot" target="_blank">
                    <IconButton>
                      <Icon color="grey-700" icon="discord" size={24} />
                    </IconButton>
                  </Link>
                </StyledBoxMiddle>
                <StyledBoxMiddle>
                  <Link
                    href="https://www.instagram.com/upshot.hq/"
                    target="_blank"
                  >
                    <IconButton>
                      <Icon color="grey-700" icon="instagramCircle" size={24} />
                    </IconButton>
                  </Link>
                </StyledBoxMiddle>
              </Flex>
            </StyledBoxRight>
          )}
        </FooterLine>
      </Box>
    )
  }
)

export default Footer
