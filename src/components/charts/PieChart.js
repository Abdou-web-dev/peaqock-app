import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import peaqockLogo from "../../assets/images/peaqockLogo.svg";
import "./chart_styles.scss";

export function PieChart({
  setparagraph,
  paragraph,
  setmyTitleLeft,
  setmyTitleRight,
  myTitleLeft,
  myTitleRight,
}) {
  function handleLeave() {
    setparagraph(paragraph);
    setmyTitleLeft(myTitleLeft);
    setmyTitleRight(myTitleRight);
  }

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
        point: {},
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
            name: "Market Attractiveness",
            events: {
              mouseOver() {
                setparagraph(`Market Attractiveness ,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam optio
                atque magnam aliquam repellendus illo repellat minima, corrupti quia quidem
                eligendi consequatur`);
                setmyTitleLeft(`Attract`);
                setmyTitleRight(`Customers`);
              },
              mouseOut: function () {
                handleLeave();
              },
            },
          },
          {
            y: 35,
            name: "Connect with potential partners",
            events: {
              mouseOver() {
                setparagraph(`Connect with potential partners, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione
                quaerat beatae vitae cum, harum necessitatibus praesentium quidem explicabo
                quis`);
                setmyTitleLeft(`Connect`);
                setmyTitleRight(`with people`);
              },
              mouseOut: function () {
                handleLeave();
              },
            },
          },
          {
            y: 33,
            name: "Find business opportunities",
            events: {
              mouseOver() {
                setparagraph(`Find business opportunities Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                dolor.`);
                setmyTitleLeft(`Find`);

                setmyTitleRight(`opportunities`);
              },
              mouseOut: function () {
                handleLeave();
              },
            },
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
