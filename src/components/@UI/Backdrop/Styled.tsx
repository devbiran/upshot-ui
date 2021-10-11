import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

/**
 * Adds a dimmed layer to draw attention to a foreground component.
 */
export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.rawColors.black};
  z-index: ${({ theme }) => theme.zIndex.modal - 1};
  animation: ${keyframes`from { opacity: 0; }`} 0.5s ease;
  opacity: ${({ $open }) => ($open ? 0.8 : 0.0)};
  transition: all 0.5s ease;
`
