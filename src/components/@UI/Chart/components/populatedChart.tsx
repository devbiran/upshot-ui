import React, { useState } from 'react'
import { default as ReactApexCharts } from 'react-apexcharts'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'
import { Text } from 'theme-ui'

import {
  FilterWrapper,
  FilterButton,
  CustomLegendWrapper,
  CustomLegend
} from '../Styled'
import {
  getOptions,
  toggle,
  DataProps,
} from '../utils'

const PopulatedChart = (chartData: DataProps) => {
  const theme = useTheme()
  const { data } = chartData;
  const [filter, setFilter] = useState(0)
  const [filterStatus, setFilterStatus] = useState(data.map((_) => true))

  const colors = [
    theme.rawColors.primary,
    theme.rawColors.secondary,
    theme.rawColors.purple,
  ]
  const filterLabels = ['1H', '1D', '1W', '1Y', 'ALL']
  const options: ApexOptions = getOptions(theme, data)

  return (
    <>
      <ReactApexCharts
        series={data}
        type="area"
        height="auto"
        width="100%"
        {...{ options }}
      />
      <FilterWrapper>
        {[...new Array(5)].map((_, i) => (
          <FilterButton
            key={i}
            active={filter === i}
            onClick={() => setFilter(i)}
          >
            {filterLabels[i]}
          </FilterButton>
        ))}
      </FilterWrapper>
      <CustomLegendWrapper>
        {[...new Array(data.length)].map((_, i) => (
          <CustomLegend
            key={i}
            active={filterStatus[i]}
            color={colors[i]}
            onClick={
              () =>
                toggle(
                  i,
                  data[i].name,
                  filterStatus,
                  setFilterStatus
                )
              }
          >
            <Text>{data[i].name}</Text>
          </CustomLegend>
        ))}
      </CustomLegendWrapper>
    </>
  )
}

export default PopulatedChart