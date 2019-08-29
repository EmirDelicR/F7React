/** LINE GRAPH */
const lineGraphOptions = {
  legend: { display: false },
  responsive: true,
  tooltips: {
    callbacks: {
      label: function(tooltipItem) {
        return tooltipItem.yLabel;
      }
    }
  },

  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: false
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          fontStyle: "italic"
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          display: false,
          min: 0,
          max: 10
        },
        scaleLabel: {
          display: false
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  plugins: {
    datalabels: {
      display: false
    }
  }
};

const lineGraphDataSet = {
  pointRadius: 5,
  pointBackgroundColor: "white",
  lineTension: 0,
  borderColor: "#7CC5D7",
  borderWidth: 1
};

/** BAR GRAPH */
const barGraphOptions = {
  responsive: true,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          stepSize: 3,
          min: 0,
          max: 12,
          fontColor: "black",
          callback: val => (![0, 9].includes(val) ? val + " h" : "")
        },
        gridLines: {
          display: false,
          color: "#BBE3EF"
        }
      }
    ]
  },
  plugins: {
    datalabels: {
      anchor: "end",
      align: "top",
      formatter: Math.round,
      font: {
        weight: "bold"
      }
    }
  }
};

/** STACKED GRAPH */

const stackedGraphOptions = {
  responsive: true,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        //maxBarThickness: 200,
        stacked: true,
        scaleLabel: {
          display: false
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          display: false
        },
        scaleLabel: {
          display: false
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  }
};

export {
  lineGraphOptions,
  lineGraphDataSet,
  barGraphOptions,
  stackedGraphOptions
};
