import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
 


const data = [
  { name: 'Group A', value: 400, fill:"#0088FE" },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];





const StatsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-900 min-h-screen text-white">
      <div className="flex items-center gap-2 mb-6">
        <PieIcon size={32} className="text-blue-400" />
        <h1 className="text-3xl font-bold italic">Statistics Overview</h1>
      </div>

      <div className="w-full max-w-[500px] h-[400px] bg-gray-800 p-4 rounded-2xl shadow-2xl border border-gray-700">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              innerRadius={60} 
              fill="#8884d8"
              dataKey="value"
              paddingAngle={5}
            >
             
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
            <span className="text-sm text-gray-300">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;