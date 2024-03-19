import { Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';

export function CustomStackedBarChart(props) {
    const data = [
        { name: 'x', oilgas: 32, pharma: 20}, {name: 'y', privateBank: 26, construction: 26 } , {name: 'z', power: 40, other: 12 }
    ];

    const columns = [{key: "Oil & Gas", value: 32}, {key: "Pharmaceuticals", value: 20}, {key: "Power Generation", value: 26}, {key: "Private Bank", value: 26}, {key: "Construction", value: 40}, {key: "Other", value: 12}]

    const COLORS =  ["#4fb9af", "#42b6f5", "#FF8042", "#4d5357", "#b5b8ba", "#d5b8ba"];

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
                            <div className="BulletLabelText">{entry.key}:<b>{entry.value}%</b></div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <BarChart
            data={data}
            layout="vertical" barGap={-45}
            width={400} height={200}
        >
            <XAxis type="number" hide />
            <YAxis type="category" hide width={150} dataKey="name" />
            <Legend verticalAlign="bottom" content={<CustomizedLegend />} />
            <Bar dataKey="oilgas" stackId="x" fill="#4fb9af" />
            <Bar dataKey="pharma" stackId="x" fill="#42b6f5" />
            <Bar dataKey="privateBank" stackId="y" fill="#4d5357" />
            <Bar dataKey="construction" stackId="y" fill="#b5b8ba" />
            <Bar dataKey="power" stackId="z" fill="#FF8042" />
            <Bar dataKey="other" stackId="z" fill="#d5b8ba" />
        </BarChart>
    );
}

export default (CustomStackedBarChart);
