import styled from '@emotion/styled'
import Buttons from '../../../themes/UpshotUI/buttons'

interface PrimaryButtonProps {
  $type: keyof typeof Buttons.variants
  $size: keyof typeof Buttons.property
  width: number
  minimized: boolean
}

interface PlainButtonProps {
  $size: keyof typeof Buttons.property
}

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  background: ${({ theme, $type }) =>
    theme.buttons.variants[$type].colors.background};
  border: 2px solid
    ${({ theme, $type }) => theme.buttons.variants[$type].colors.border};
  font-size: ${({ theme, $size }) => theme.buttons.property[$size].fontSize}px;
  height: ${({ theme, $size }) => theme.buttons.property[$size].height}px;
  border-radius: ${({ theme }) => theme.radii.pill};
  width: ${({ width }) => width}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 11px;
  transition: ${({ theme }) => theme.transitions.default};

  & svg {
    margin-right: ${({ theme, $size, minimized }) =>
      minimized ? 0 : theme.buttons.property[$size].iconMargin}px;
    width: ${({ theme, $size }) => theme.buttons.property[$size].iconWidth}px;
  }

  & * {
    fill: ${({ theme, $type }) => theme.buttons.variants[$type].colors.color};
  }

  span {
    flex-grow: 1;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme, $type }) => theme.buttons.variants[$type].colors.color};
  }

  &:disabled {
    cursor: not-allowed !important;
    background: ${({ theme }) => theme.colors['grey-700']};
    span {
      color: ${({ theme }) => theme.colors.black};
    }
    border-color: ${({ theme }) => theme.colors['grey-700']};
  }

  &:not(:disabled):hover {
    background: ${({ theme, $type }) =>
      theme.buttons.variants[$type].colors.hoverBackground};
    border: 2px solid
      ${({ theme, $type }) => theme.buttons.variants[$type].colors.hoverBorder};
    span {
      color: ${({ theme, $type }) =>
        theme.buttons.variants[$type].colors.hoverColor};
    }

    & * {
      fill: ${({ theme, $type }) =>
        theme.buttons.variants[$type].colors.hoverColor};
    }
  }

  &:not(:disabled):active {
    box-shadow: 0px 4px 4px rgba(0, 145, 255, 0.6);
    transform: scale(0.95);
  }

  &:not(:disabled):focus {
    background: ${({ theme, $type }) =>
      theme.buttons.variants[$type].colors.pressedBackground};
    border: 2px solid
      ${({ theme, $type }) =>
        theme.buttons.variants[$type].colors.pressedBorder};
    span {
      color: ${({ theme, $type }) =>
        theme.buttons.variants[$type].colors.pressedColor};
    }

    svg {
      path {
        fill: ${({ theme, $type }) =>
          theme.buttons.variants[$type].colors.pressedColor};
      }
    }
  }
`

// fixme: 'plain' should be a theme variant
export const PlainButton = styled.button<PlainButtonProps>`
  font-size: ${({ theme, $size }) => theme.buttons.property[$size].fontSize}px;
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  height: ${({ theme, $size }) => theme.buttons.property[$size].height}px;

  &:not(:disabled):hover {
    span {
      text-decoration: underline;
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors['grey-700']};
  }

  & svg {
    margin-left: ${({ theme, $size }) =>
      theme.buttons.property[$size].iconMargin}px;
    width: ${({ theme, $size }) => theme.buttons.property[$size].iconWidth}px;

    & * {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`
