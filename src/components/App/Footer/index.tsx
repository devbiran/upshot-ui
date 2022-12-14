import React, { forwardRef } from 'react'
import { Box, FlexProps } from 'theme-ui'

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
import Link from '../../@UI/Link'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import { Container } from '../../..'
import colors from '../../../themes/UpshotUI/colors'

export interface FooterProps extends FlexProps {
  /**
   * Sidebar is visible.
   */
  sidebarVisible?: boolean
  /**
   * Polymorphic wrapper (used to inherit Next routing)
   */
  linkComponent?: React.FunctionComponent<any>
}

/**
 * Footer at the bottom of the application.
 */
const Footer = forwardRef(
  (
    { sidebarVisible = false, linkComponent, ...props }: FooterProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Box sx={{ backgroundColor: colors['grey-900'], padding: 4 }}>
        <Container maxBreakpoint="lg">
          <FooterLine {...{ ref, ...props }}>
            <StyledBoxLeft>
              <LogoBox href="https://upshot.xyz/" target="_blank">
                Upshot
              </LogoBox>
              <StyledBox>
                <Flex>
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
                      component={linkComponent}
                    >
                      <IconButton>
                        <Icon color="grey-700" icon="mirror" size={24} />
                      </IconButton>
                    </Link>
                  </StyledBoxMiddle>
                  <StyledBoxMiddle>
                    <Link
                      href="https://twitter.com/upshothq"
                      target="_blank"
                      component={linkComponent}
                    >
                      <IconButton>
                        <Icon color="grey-700" icon="twitterCircle" size={24} />
                      </IconButton>
                    </Link>
                  </StyledBoxMiddle>
                  <StyledBoxMiddle>
                    <Link
                      href="https://discord.gg/upshot"
                      target="_blank"
                      component={linkComponent}
                    >
                      <IconButton>
                        <Icon color="grey-700" icon="discord" size={24} />
                      </IconButton>
                    </Link>
                  </StyledBoxMiddle>
                  <StyledBoxMiddle>
                    <Link
                      href="https://www.instagram.com/upshot.hq/"
                      target="_blank"
                      component={linkComponent}
                    >
                      <IconButton>
                        <Icon
                          color="grey-700"
                          icon="instagramCircle"
                          size={24}
                        />
                      </IconButton>
                    </Link>
                  </StyledBoxMiddle>
                </Flex>
              </StyledBoxRight>
            )}
          </FooterLine>
        </Container>
      </Box>
    )
  }
)

export default Footer
