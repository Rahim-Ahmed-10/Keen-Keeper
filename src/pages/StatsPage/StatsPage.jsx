import React, { useContext } from 'react'; // useContext ইমপোর্ট করুন
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart as PieIcon } from 'lucide-react';
import { TimeLineContext } from '../../context/TimeLineContext'; // আপনার কন্টেক্সট পাথ অনুযায়ী দিন

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const StatsPage = () => {
 
  const { callTimeLine } = useContext(TimeLineContext);
console.log(callTimeLine, "callTimeLine")
  // ২. ডাইনামিক ভাবে কাউন্ট বের করুন (ডেটার টাইপ অনুযায়ী ফিল্টার করুন)
  const callCount = callTimeLine?.filter(item => item.type?.toLowerCase() === 'call').length || 0;
  const textCount = callTimeLine?.filter(item => item.type?.toLowerCase() === 'text').length || 0;
  const videoCount = callTimeLine?.filter(item => item.type?.toLowerCase() === 'video').length || 0;

  console.log(callCount, textCount, videoCount, "Count")

  
  const dynamicData = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ];

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
              data={dynamicData} 
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
              {dynamicData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 flex gap-4">
        {dynamicData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
            <span className="text-sm text-gray-300">
              {item.name}: <span className="font-bold text-white">{item.value}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;