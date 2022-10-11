import React from 'react';
import { Line, LineChart } from 'recharts';

const Stat = ({ data }) => {
    const { id, total } = data;
    console.log(data)
    return (
        <div>
            <LineChart className='w-400 h-500' data={data}>
                <Line type="monotone" dataKey={total}></Line>
            </LineChart>

        </div>
    );
};

export default Stat;