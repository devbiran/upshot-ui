const chart = {
  size: {
    tiny: {
      width: 375,
      height: 165,
    },
    small: {
      width: 640,
      height: 290
    },
    medium: {
      width: 876,
      height: 275,
    },
    large: {
      width: 1044,
      height: 290
    }
  },
  options: {
    stroke: {
      curve: 'smooth',
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
      horizontalAlign: 'left',
      fontSize: '14px',
      labels: {
        useSeriesColors: true,
      },
      markers: {
        width: 16,
        height: 16,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      tootlip: {
        enabled: true
      }
    }
  },
  defaultSeries: [
    {
      name: 'default',
      data: [31, 40, 28, 32, 51, 42, 109, 100]
    }
  ]
}

export default chart