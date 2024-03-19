import { PieChart, Pie, Legend, Cell, Tooltip } from 'recharts';

export function CustomPieChart(props) {
const data = [
    { name: 'Flexi Cap Fund', count: 30 },
    { name: 'ELSS', count: 26 },
    { name: 'Small Cap Fund', count: 26 },
    { name: 'Index Fund', count: 12 },
    { name: 'Sectoral Fund', count: 26 },
    { name: 'Large & Mid Cap Fund', count: 12 }
];

const sum = 132;
const COLORS = ["#4fb9af", "#42b6f5", "#FF8042", "#4d5357", "#b5b8ba", "#d5b8ba"];

const Bullet = ({ backgroundColor, size }) => {
    return (
      <div
        style={{
          backgroundColor,
          width: size,
          height: size
        }}
      ></div>
    );
  };

const CustomizedLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="LegendList">
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>
            <div className="BulletLabel">
              <Bullet backgroundColor={entry.payload.fill} size="10px" />
              <div className="BulletLabelText">{entry.value}:<b>{labelFormatter(entry.payload.count)}</b></div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const labelFormatter = (value) => {
    return `${(value/sum * 100).toFixed(0)}%`
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }
  }

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
         <PieChart width={520} height={300}>
            <Pie data={data} dataKey="count" cx="40%" cy="40%" labelLine={false} label={renderCustomizedLabel} outerRadius={90}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="bottom" content={<CustomizedLegend />} />
        </PieChart>
    );
}

export default (CustomPieChart);
