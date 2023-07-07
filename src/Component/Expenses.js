import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Expenses() {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      marginTop: -100,
      marginLeft: -100,
      marginRight: -100,
      marginBottom: -100,
      height: 250,
    },
    title: {
      text: "",
      align: "center",
      verticalAlign: "middle",
      y: 60,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        size: "40%",
        dataLabels: {
          enabled: true,
          distance: -30,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        innerSize: "50%",
        data: [
          ["CMC", 15000],
          ["AMC", 10000],
          ["Service changes", 45000],
          ["Spares", 30000],
          {
            name: "Other",
            y: 3.77,
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <h5>Expenses</h5>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}

export default Expenses;
