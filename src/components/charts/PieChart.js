import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import peaqockLogo from "../../assets/images/peaqockLogo.svg";
import "./chart_styles.scss";

export function PieChart({}) {
  const options = {
    chart: {
      type: "pie",
      //   margin: 100,
      backgroundColor: null,
      width: 600,
      height: 600,
    },
    title: {
      text: "",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>',
    },
    credits: {
      enabled: false,
    },
    colors: ["#20C7AB", "#EDB917", "#388CBA"],

    plotOptions: {
      pie: {
        // size: "160%",
        center: ["50%", "50%"], //alows the chart to move
        showInLegend: false,
      },
      series: {
        dataLabels: {
          //if enabled is true, the percentages values will appear on the slices
          enabled: false,
        },
      },
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "40%",
        name: "Percentage",
        data: [
          {
            y: 33,
            name: " Market Attractiveness ",
          },
          {
            y: 33,
            name: " Connect with potential partners",
          },
          {
            y: 33,
            name: "Find business opportunities",
          },
        ],
      },
    ],
  };

  return (
    <div className="pie-chart">
      <div className="pie-chart-chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className="pie-chart-logo">
        <img src={peaqockLogo} alt="" />
      </div>
    </div>
  );
}
