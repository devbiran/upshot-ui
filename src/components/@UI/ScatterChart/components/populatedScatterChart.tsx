import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import { format } from 'date-fns'
import ReactApexChart from 'react-apexcharts'
import { CustomLegendWrapper, TimeFilter, TimeFilterWrapper } from '../Styled'
import ButtonChartCollection from '../../ButtonChartCollection'
import { toggle } from '../../Chart/utils'
import colors from '../../../../themes/UpshotUI/colors'

interface PopulatedScatterChartProps {
  chartData: {
    name: string
    data: any
    labelColor?: keyof typeof colors
  }[]
}

const PopulatedScatterChart = ({ chartData }: PopulatedScatterChartProps) => {
  const theme = useTheme()
  const emptyFilters = chartData.map((_) => true)
  const [filterStatus, setFilterStatus] = useState(emptyFilters)
  const [timeFilter, setTimeFilter] = useState(0)
  const [previousTimeSlot, setPreviousTimeSlot] = useState(0)
  const timeFilters = ['1H', '1D', '1W', '1M', 'ALL']

  const getTimePeriod = () => {
    switch (timeFilter) {
      case 0:
        return 3600000
      case 1:
        return 86400000
      case 2:
        return 604800000
      case 3:
        return 2592000000
      case 4:
        return 0
    }
  }

  const labelColors: Array<keyof typeof colors> = [
    'blue',
    'pink',
    'purple',
    'yellow',
    'red',
    'green',
  ]
  for (let i = 0; i < chartData.length; i++) {
    chartData[i].labelColor = labelColors[i]
  }

  return (
    <>
      <ReactApexChart
        series={chartData}
        type="scatter"
        height={300}
        width="100%"
        options={{
          chart: {
            id: 'upshotChart',
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: false,
            },
            animations: {
              enabled: false,
            },
          },
          stroke: {
            width: 2.5,
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          tooltip: {
            enabled: true,
            theme: 'dark',

            custom: function ({ dataPointIndex }: { dataPointIndex: number }) {
              const name = chartData[0].name
              const [timestamp, price, tokenId, buyer] = chartData[0].data[
                dataPointIndex
              ] as any

              return `
                <div style="background-color: ${
                  theme.rawColors['grey-900']
                }; border-radius: 5px; color: white; padding: 12px; font-weight: 600; font-size: 1rem;">
                  <div style="color: ${
                    theme.rawColors.blue
                  }">${name} #${tokenId}</div>
                  <div style="font-size: 0.9rem; color: ${
                    theme.rawColors.white
                  }">${format(timestamp, 'MM/dd/yyyy')} (Ξ${price})</div>
            <div style="display: flex; align-items: center; font-weight: 400; font-size: 0.9rem; color: ${
              theme.rawColors['grey-400']
            };">
            <div style="width:5px; height: 5px; border-radius: 50%; background-color: ${
              theme.rawColors.purple
            }; margin-right: 4px;"></div>
            ${buyer}</div>
              </div>
            `
            },
          },
          yaxis: {
            show: true,
            labels: {
              show: true,
              style: {
                colors: theme.rawColors['grey-200'],
                fontSize: '.75rem',
                fontFamily: 'proxima-nova, sans-serif',
              },
              formatter: (value: number) => 'Ξ' + value,
            },
            forceNiceScale: true,
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: true,
              rotate: 0,
              style: {
                colors: theme.rawColors['grey-200'],
                fontSize: '.75rem',
                fontFamily: 'proxima-nova, sans-serif',
              },
              formatter: (value: string) => {
                if (!value) return null
                if (
                  getTimePeriod() &&
                  (!previousTimeSlot ||
                    Number(value) - previousTimeSlot >= getTimePeriod())
                ) {
                  setPreviousTimeSlot(Number(value))
                  console.log({ value })
                }
                return format(Number(value), 'MM/dd/yy')
              },
            },
            tooltip: {
              enabled: false,
            },
          },
          colors: [theme.rawColors.primary],
          markers: {
            size: 6,
            colors: [theme.rawColors.primary],
            strokeColors: [theme.rawColors.primary],
          },
        }}
      />
      <CustomLegendWrapper>
        {[...new Array(chartData.length)].map((_, i) => (
          <ButtonChartCollection
            key={i}
            color={chartData[i]?.labelColor}
            title={chartData[i].name}
            selected={filterStatus[i]}
            onClick={() =>
              toggle(i, chartData[i].name, filterStatus, setFilterStatus)
            }
          />
        ))}
      </CustomLegendWrapper>
      <TimeFilterWrapper>
        {timeFilters.map((filter, id) => (
          <TimeFilter
            onClick={() => setTimeFilter(id)}
            active={id === timeFilter}
          >
            {filter}
          </TimeFilter>
        ))}
      </TimeFilterWrapper>
    </>
  )
}

export default PopulatedScatterChart
