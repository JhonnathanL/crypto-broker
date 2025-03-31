import "./styles.css";
import ReactECharts from "echarts-for-react";

const CryptoCharts: React.FC = () => {
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        itemStyle: {
            color: "#f0b90b",
        }
      }
    ]
  };

  return <ReactECharts option={options} style={{ height: 430, width: "54%" }} />;
};

export default CryptoCharts;
