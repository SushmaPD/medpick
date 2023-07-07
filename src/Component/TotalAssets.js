import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function TotalAssets() {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      marginTop: -100,
      marginLeft: -100,
      marginRight: -100,
      marginBottom: -80,
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
        borderWidth: 5,
        dataLabels: {
          enabled: false,
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
        innerSize: "70%",
        data: [
          ["Chrome", 43.86],
          ["Edge", 11.97],
          ["Firefox", 5.52],
          ["Safari", 2.98],
          ["Internet Explorer", 11.9],
          ["Internet Explorer", 20],
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
      <h5>Total assets</h5>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <h2>46</h2>
    </>
  );
}

export default TotalAssets;
