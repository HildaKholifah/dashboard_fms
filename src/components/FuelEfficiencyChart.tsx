import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

type Props = { height?: number };

const data = [
  { day: 'Sen', efficiency: 4.5 },
  { day: 'Sel', efficiency: 4.3 },
  { day: 'Rab', efficiency: 4.1 },
  { day: 'Kam', efficiency: 4.0 },
  { day: 'Jum', efficiency: 4.2 },
  { day: 'Sab', efficiency: 4.4 },
  { day: 'Min', efficiency: 4.6 },
];

export function FuelEfficiencyChart({ height = 300 }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-gray-800 mb-1">Tren Efisiensi BBM</h3>
        <p className="text-sm text-gray-500">Performa harian dalam KM/L</p>
      </div>
      
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="day" 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            domain={[3.5, 5.0]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px'
            }}
            formatter={(value: number) => [`${value} KM/L`, 'Efisiensi']}
          />
          <ReferenceLine 
            y={4.5} 
            stroke="#ef4444" 
            strokeDasharray="5 5" 
            label={{ 
              value: 'Target Ideal (4.5)', 
              position: 'right',
              fill: '#ef4444',
              fontSize: 12
            }}
          />
          <Line 
            type="monotone" 
            dataKey="efficiency" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="mt-4 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-blue-500"></div>
          <span className="text-gray-600">Efisiensi Aktual</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-red-500 border-dashed border-t-2 border-red-500"></div>
          <span className="text-gray-600">Target (4.5 KM/L)</span>
        </div>
      </div>
    </div>
  );
}
