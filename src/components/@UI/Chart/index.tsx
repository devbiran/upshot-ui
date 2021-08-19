import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import { default as ReactApexCharts } from 'react-apexcharts'
import { Text } from 'theme-ui'
import ApexCharts, { ApexOptions } from 'apexcharts'
import {
  NoDataBoard,
  ChartWrapper,
  ChartLoadingBoard,
  FilterWrapper,
  FilterButton,
  CustomLegendWrapper,
  CustomLegend,
  ChartNoSelectedWrapper,
  ChartNoSelectedTextArea,
} from './Styled'
import Spinner from '../Spinner'

export interface ChartProps {
  loading?: boolean
  noData?: boolean
  error?: boolean
  noSelected?: boolean
  data?: ApexOptions['series']
}

export default function Chart({
  loading = false,
  noData = false,
  error = false,
  noSelected = false,
  data,
}: ChartProps) {
  const theme = useTheme()
  const [filter, setFilter] = useState(0)
  const [filterStatus, setFilterStatus] = useState([true, true])

  const colors = [
    theme.colors.primary.toString(),
    theme.colors.secondary.toString(),
  ]

  const options: ApexOptions = {
    ...(theme.chart.options as ApexOptions),
    chart: {
      id: 'myChart',
      type: 'area',
    },
    colors,
    markers: {
      size: [4, 7],
      colors,
      strokeColors: colors,
    },
    tooltip: {
      enabled: true,
      shared: false,
      custom: function ({
        series,
        seriesIndex,
        dataPointIndex,
        w: {
          globals: { clientX: x, svgWidth: width },
        },
      }) {
        const offset =
          x <= width / 2 ? 'calc(-50% - 12px)' : 'calc(50% + 9.5px)'

        return `
          <style>
            .apexcharts-tooltip {
              background: transparent!important;
              border: none!important;
              box-shadow: none!important;
              transform: translateX(${offset}) translateY(-10px);
              overflow: visible;
            }
          </style>
          <div style="
            position: relative;
            background: black;
            border-radius: 1rem;
            padding: 0.1rem 1rem;
            overflow: visible;
            font-family: Arial;
            color: ${colors[seriesIndex]};
            border: 1px solid ${colors[seriesIndex]};
          " id="apexcharts-custom-tooltip"
          >
            $ ${series[seriesIndex][dataPointIndex]}
            <div style="
              position: absolute;
              bottom: -6px;
              left: 50%;
              transform: translateX(-50%) rotate(-45deg);
              width: 10px;
              height: 10px;
              background: black;
              border-left: 1px solid ${colors[seriesIndex]};
              border-bottom: 1px solid ${colors[seriesIndex]};
            ">
            </div>
          </div>
          `
      },
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  }

  if (loading) {
    return (
      <ChartWrapper>
        <div>
          <ChartLoadingBoard>
            <Spinner />
          </ChartLoadingBoard>
        </div>
      </ChartWrapper>
    )
  }

  if (error) {
    return (
      <ChartWrapper>
        <div>
          <NoDataBoard>
            <div>
              <Text variant="largeWhite"> SORRY: </Text> <br />
              <Text variant="h1PrimaryWhite"> ERROR LOADING DATA </Text>
            </div>
          </NoDataBoard>
        </div>
      </ChartWrapper>
    )
  }

  if (noData) {
    return (
      <ChartWrapper>
        <div>
          <NoDataBoard>
            <div>
              <Text variant="largeWhite"> SORRY: </Text> <br />
              <Text variant="h1PrimaryWhite"> NO DATA (YET) </Text>
            </div>
          </NoDataBoard>
        </div>
      </ChartWrapper>
    )
  }

  if (noSelected) {
    return (
      <ChartWrapper>
        <div>
          <ChartNoSelectedWrapper>
            <ReactApexCharts
              options={options}
              series={theme.chart.defaultSeries}
              type="area"
              height="100%"
              width="100%"
            />
            <ChartNoSelectedTextArea>
              <div>
                <Text variant="largeWhite"> NOTHING SELECTED: </Text>
                <br />
                <Text variant="h1PrimaryWhite">
                  SELECT A COLLECTION (OR MULITPLE) <br /> FROM THE CONTAINER
                  BELOW.
                </Text>
              </div>
            </ChartNoSelectedTextArea>
          </ChartNoSelectedWrapper>
        </div>
      </ChartWrapper>
    )
  }

  const toggle = (value: number) => {
    ApexCharts.exec('myChart', 'toggleSeries', `series${value}`)
    const newStatus = [...filterStatus]
    newStatus[value - 1] = !newStatus[value - 1]
    setFilterStatus(newStatus)
  }

  return (
    <>
      <ChartWrapper>
        <div>
          <ReactApexCharts
            options={options}
            series={data}
            type="area"
            height="100%"
            width="100%"
          />
          <FilterWrapper>
            <FilterButton active={filter === 0} onClick={() => setFilter(0)}>
              1H
            </FilterButton>
            <FilterButton active={filter === 1} onClick={() => setFilter(1)}>
              1D
            </FilterButton>
            <FilterButton active={filter === 2} onClick={() => setFilter(2)}>
              1W
            </FilterButton>
            <FilterButton active={filter === 3} onClick={() => setFilter(3)}>
              1Y
            </FilterButton>
            <FilterButton active={filter === 4} onClick={() => setFilter(4)}>
              ALL
            </FilterButton>
          </FilterWrapper>
          <CustomLegendWrapper>
            <CustomLegend
              active={filterStatus[0]}
              color={theme.colors.primary}
              onClick={() => toggle(1)}
            >
              <div />
              <span> SERIES 1 </span>
            </CustomLegend>
            <CustomLegend
              active={filterStatus[1]}
              color={theme.colors.secondary}
              onClick={() => toggle(2)}
            >
              <div />
              <span> SERIES 2 </span>
            </CustomLegend>
          </CustomLegendWrapper>
        </div>
      </ChartWrapper>
    </>
  )
}
