import "./chart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 300 },
  { name: "February", Total: 500 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1000 },
  { name: "July", Total: 800 },
  { name: "August", Total: 900 },
  { name: "Sept", Total: 1200 },
  { name: "October", Total: 2200 },
  { name: "Nov", Total: 1000 },
  { name: "December", Total: 1100 },
];

const Chart = ({ aspect = 4 / 3, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Bar dataKey="Total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
