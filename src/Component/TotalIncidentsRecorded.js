import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Load a module

function TotalIncidentsRecorded() {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Total Incidents Recorded",
      align: "left",
    },
    subtitle: {
      align: "left",
    },
    xAxis: {
      name: "Weeks",
      categories: [
        "Week1",
        "Week2",
        "Week3",
        "Week4",
        "Week5",
        "Week6",
        "Week7",
      ],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
    },
    yAxis: {
      min: 0,
    },
    tooltip: {
      valueSuffix: " (1 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        color: "#ffc107",

        data: [13, 28, 6, 17, 35, 20, 25],
      },
    ],
  };

  return (
    <>
      <div class="card border-2 rounded-3 mt-5 mb-5">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
}
export default TotalIncidentsRecorded;
