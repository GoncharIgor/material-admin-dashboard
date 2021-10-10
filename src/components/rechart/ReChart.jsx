import './rechart.scss';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';

export default function ReChart({title, data, dataKey}) {
    return (
        <div className="chart">
            <h3 className="chart__title">{title}</h3>
            {/* aspect={4/1} - if width = 4 units, then height will be 1 unit */}
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    {/* will take values from data.name property to draw a scale on x axis*/}
                    {/* stroke - color of x axis */}
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    {/* will take values from data.["Active User"] property to draw a line*/}
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    {/*To show number tooltips on the line*/}
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
