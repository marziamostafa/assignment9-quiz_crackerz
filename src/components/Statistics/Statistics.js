
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';




const Statistics = () => {
    // const allData = useLoaderData().data;
    // console.log(allData)
    const allData = [
        { id: 1, name: "React", total: 8 },
        { id: 2, name: "JavaScript", total: 9 },
        { id: 3, name: "CSS", total: 8 },
        { id: 4, name: "Git", total: 11 }
    ]
    return (
        <div>
            <h2 className='text-4xl font-bold py-5'>Statistics</h2>
            <div className='bg-white flex justify-center'>
                <LineChart height={300} width={300} data={allData}>
                    <Line type="monotone" dataKey={allData.total} stroke="#8884d8" activeDot={{ r: 8 }} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>

        </div>
    );
};

export default Statistics;