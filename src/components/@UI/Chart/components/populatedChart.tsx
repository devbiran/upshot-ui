import React, { useState } from 'react'
import { default as ReactApexCharts } from 'react-apexcharts'
import { useTheme } from '@emotion/react'
import { ApexOptions } from 'apexcharts'
import { Text } from 'theme-ui'

import {
  CustomLegendWrapper,
  CustomLegend,
} from '../Styled'
import { getOptions, toggle } from '../utils'

interface PopulatedChartProps {
  chartData: {
    name: string
    data: number[] | number[][],
  }[],
  embedded: boolean,
}

const PopulatedChart = ({chartData, embedded}: PopulatedChartProps) => {
  const theme = useTheme()
  const [filterStatus, setFilterStatus] = useState(chartData.map((_) => true))
  const [selected, setSelected] = useState(true)

  const colors = [
    theme.rawColors.primary,
    theme.rawColors.secondary,
    theme.rawColors.purple,
  ]
  const options: ApexOptions = getOptions(theme, chartData, embedded, selected)

  return (
    <>
      <ReactApexCharts
        series={chartData}
        type="area"
        height="100%"
        width="100%"
        {...{ options }}
      />
      {
        !embedded &&
          <CustomLegendWrapper>
            {[...new Array(chartData.length)].map((_, i) => (
              <CustomLegend
                key={i}
                active={filterStatus[i]}
                color={colors[i]}
                onClick={() =>
                  toggle(i, chartData[i].name, filterStatus, setFilterStatus)
                }
              >
                <Text>{chartData[i].name}</Text>
              </CustomLegend>
            ))}
          </CustomLegendWrapper>
      }
    </>
  )
}

export default PopulatedChart
