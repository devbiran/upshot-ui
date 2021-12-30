import React, { forwardRef, useState } from 'react'
import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import { CollectionRowBase } from './Styled'
import {
  CollectorRowBase,
  CollectorRowContent,
  CollectorRowExpansion,
} from '../CollectorAccordionRow/Styled'
import TableCell from '../../Layout/TableCell'
import { TableRowProps } from '../../Layout/TableRow'
import { Icon, useBreakpointIndex } from '../../..'
import { Flex, IconButton } from '@theme-ui/components'
import { imageOptimizer } from '../../../utils/imageOptimizer'

export type Variant = 'black' | 'dark' | 'normal'
export interface CollectionRowProps extends TableRowProps {
  /**
   * The image source url for the avatar.
   */
  imageSrc: string
  /**
   * The main title of the item.
   */
  title: string
  /**
   * Background variant
   */
  variant?: Variant
  /**
   * OnClick handler.
   */
  onClick?: () => void

  totalVolume?: string

  pixelated?: boolean

  defaultOpen?: boolean
}

const CollectionRow = forwardRef(
  (
    {
      variant = 'normal',
      imageSrc,
      title,
      children,
      pixelated,
      totalVolume,
      defaultOpen = false,
      onClick,
      ...props
    }: CollectionRowProps,
    ref: React.ForwardedRef<HTMLTableRowElement>
  ) => {
    const breakpointIndex = useBreakpointIndex()
    const isMobile = breakpointIndex <= 1
    const [open, setOpen] = useState(defaultOpen)
    const optimizedSrc = imageOptimizer(imageSrc, {height: 48}) ?? imageSrc
    return (
      <>
        {!isMobile ? (
          <CollectionRowBase $variant={variant} {...{ ref, ...props }}>
            {/* Each row has a required avatar image circle. */}
            <TableCell>
              <Avatar
                {...{ pixelated, optimizedSrc, onClick }}
                sx={{
                  cursor: onClick ? 'pointer' : 'auto',
                  backgroundColor: 'grey-600',
                  borderColor: 'black',
                }}
              />
            </TableCell>

            <TableCell>
              <Text
                variant="large"
                as={onClick ? 'a' : 'span'}
                {...{ onClick }}
                sx={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  cursor: onClick ? 'pointer' : 'auto',
                  '&:hover': {
                    textDecoration: onClick ? 'underline' : undefined,
                  },
                }}
              >
                {title}
              </Text>
            </TableCell>

            {/* Additional columns (React.Fragment) */}
            {children}
          </CollectionRowBase>
        ) : (
          <CollectorRowBase
            {...{ ref, ...props }}
            onClick={() => setOpen(!open)}
          >
            <CollectorRowContent>
              <Avatar
                {...{ optimizedSrc, onClick }}
                size="md"
                pixelated={pixelated}
                sx={{ cursor: onClick ? 'pointer' : 'auto' }}
              />

              <Flex
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <Text
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 4,
                    lineHeight: 1,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {title}
                </Text>
              </Flex>

              <Flex sx={{ alignItems: 'center' }}>
                <Text
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 4,
                    lineHeight: 1,
                  }}
                >
                  {totalVolume ?? ''}
                </Text>
              </Flex>

              <Flex sx={{ alignItems: 'center' }}>
                <IconButton onClick={() => setOpen(!open)}>
                  <Icon
                    color="primary"
                    icon={open ? 'arrowUp' : 'arrowDropdown'}
                  />
                </IconButton>
              </Flex>
            </CollectorRowContent>
            <CollectorRowExpansion $open={open}>
              {children}
            </CollectorRowExpansion>
          </CollectorRowBase>
        )}
      </>
    )
  }
)

export default CollectionRow
