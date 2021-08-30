import React, { forwardRef } from 'react'
import colors from '../../../themes/UpshotUI/colors'
import {
  Avatar as ThemeUIAvatar,
  AvatarProps as ThemeUIAvatarProps,
} from 'theme-ui'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends Omit<ThemeUIAvatarProps, 'size'> {
  /**
   * Defines the size for the circle's radius.
   */
  size?: AvatarSize
  /**
   * Border color used by image variant avatars.
   */
  color?: keyof typeof colors
}

/**
 * Provides a circular avatar.
 */
const Avatar = forwardRef(
  (
    { color: borderColor = 'transparent', size = 'md', ...props }: AvatarProps,
    ref: React.ForwardedRef<HTMLImageElement>
  ) => (
    <ThemeUIAvatar
      variant={`images.avatar.${size}`}
      sx={{ borderColor, flexShrink: 0 }}
      {...{ ref, ...props }}
    />
  )
)

export default Avatar
