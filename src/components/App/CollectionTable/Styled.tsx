import styled from '@emotion/styled'
import Table from '../../Layout/Table'
import { transientOptions } from '../../../themes'

export const CollectionTableBase = styled(Table, transientOptions)`
  /* Constrain cells to 1 line of content. */
  & td {
    padding: ${({ theme }) =>
      [1, 3, 1, 1].map((n) => theme.space[n] + 'px').join(' ')};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    width: auto;
  }

  & thead td {
    font-size: 16px !important;
  }

  /* Make avatar cell smaller */
  & thead td:nth-of-type(1),
  & tbody td:nth-of-type(1) {
    box-sizing: content-box;
    width: 48px;
  }

  /* Round table corners across the child cells. */
  & td:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.radii.md};
    padding-left: 16px;
  }
  & td:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.radii.md};
  }
  & td:first-of-type {
    border-bottom-left-radius: ${({ theme }) => theme.radii.md};
  }
  & td:last-of-type {
    border-bottom-right-radius: ${({ theme }) => theme.radii.md};
    padding-right: 16px;
  }
`
