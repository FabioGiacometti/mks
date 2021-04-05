import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.scss'



 const Chart = (props) => {
  // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';


    return (
      <ResponsiveContainer width="100%" height="100%" style={{minWidth: "200px"}}>
        <LineChart
          width={500}
          height={300}
          data={props.chartData}
          minWidth={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip  content={<CustomTooltip />}/>
          <Legend />
          <Line type="monotone" dataKey="followers" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );

}

const CustomTooltip = ({ active, payload }) => {
	if (active) {
		return (
			<div className="custom-tooltip">
				<p className="label">{`${payload[0].value} New subscribers`}</p>
			</div>
		);
	}

	return null;
};

export default Chart