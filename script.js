"use strict";

const avgTimeData = [0, "02:18", "02:57", "02:32", "01:45", 0, 0, 0, 0, 0];
const convertedData = avgTimeData.map((time) => {
  if (time === 0) {
    return 0;
  } else {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }
});
console.log(convertedData);
const intervalData = [0, 1, 16, 11, 5, 2, 0, 0, 0, 0, 0];

const intervalLabel = [
  "12AM-06AM",
  "06AM-08AM",
  "08AM-10AM",
  "10AM-12PM",
  "12PM-02PM",
  "02PM-04PM",
  "04PM-06PM",
  "06PM-08PM",
  "08PM-10PM",
  "10PM-12AM",
];

var options = {
  colors: ["#FE6E6F", "#3C3D77"],

  series: [
    {
      //bar-values
      name: "Discharge By Interval",
      type: "column",
      data: intervalData,
    },
    {
      //line-values
      name: "Avg Time",
      type: "line",
      data: convertedData,
    },
  ],
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },

  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "bottom",
      },
    },
  },

  chart: {
    height: 300,
    type: "line",
    stacked: true,
    colors: ["#3C3D77"],
  },

  stroke: {
    show: true,
    width: [0, 2],
    curve: "smooth",
    colors: ["#3C3D77"],
  },

  dataLabels: {
    enabled: true,
    enabledOnSeries: [0, 1],
    hideOverflowingLabels: true,
    position: "bottom",
    style: {
      colors: ["#FE6E6F", "#3C3D77"],
    },
  },
  labels: intervalLabel,

  yaxis: [
    {
      show: false,
    },
    {
      opposite: false,
      show: false,
    },
  ],
  /*xaxis: {
    labels: {
      formatter: function (value, index) {
        //console.log(convertedData[properties]);
        if (convertedData[index] == 0) {
          console.log("0");
          return 0;
        }
        const hours = Math.floor(convertedData[index] / 60);
        const minutes = convertedData[index] % 60;
        let h = hours.toString();
        let m = minutes.toString();
        let finalString = h + ":" + m;
        console.log(finalString);
        return finalSring;
      },
    },
  },*/
  xaxis: {
    dataLabels: {
      formatter: function (value, index) {
        return convertedData[index];
      },
    },
  },

  fill: {
    colors: ["#F7C0C7"],
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
