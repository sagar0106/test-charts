import { Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';

export function CustomBarChart(props) {
    const data = [
        { name: '', equity: 32, gold: 15, bonds: 30, securities: 20 },
    ];

    const columns = [{key: "Equity", value: 32}, {key: "Gold", value: 15}, {key: "Bonds", value: 30}, {key: "Govt. Securities", value: 20}]
    const sum = 97;
    const COLORS = ["#8884d8", "#82ca9d", "#4fb9af", "#FF8042"];

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
        return (
            <ul className="LegendList">
                {columns.map((entry, index) => (
                    <li key={`item-${index}`}>
                        <div className="BulletLabel">
                            <Bullet backgroundColor={COLORS[index]} size="10px" />
                            <div className="BulletLabelText">{entry.key}:<b>{labelFormatter(entry.value)}</b></div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const labelFormatter = (value) => {
        return `${(value/sum * 100).toFixed(0)}%`
      };
      
    return (
        <BarChart
            data={data}
            layout="vertical" barCategoryGap={1}
            width={400} height={100}
        >
            <XAxis type="number" hide />
            <YAxis type="category" hide width={150} padding={{ left: 20 }} dataKey="name" />
            <Legend verticalAlign="bottom" content={<CustomizedLegend />} />
            <Bar dataKey="equity" stackId="a" fill="#8884d8" />
            <Bar dataKey="gold" stackId="a" fill="#82ca9d" />
            <Bar dataKey="bonds" stackId="a" fill="#4fb9af" />
            <Bar dataKey="securities" stackId="a" fill="#FF8042" />
        </BarChart>
    );
}

export default (CustomBarChart);
