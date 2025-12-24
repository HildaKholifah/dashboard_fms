import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

type Props = { height?: number };

const data = [
  { name: 'Active', value: 88, color: '#22c55e' },
  { name: 'Idle', value: 8, color: '#eab308' },
  { name: 'Downtime', value: 4, color: '#ef4444' }
];

export function UtilizationChart({ height = 300 }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="mb-2">
        <h3 className="text-gray-800 text-sm mb-1">Tingkat Utilisasi Armada</h3>
        <p className="text-xs text-gray-500">Distribusi status kendaraan</p>
      </div>
      
      <div className="relative w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={height * 0.18}
              outerRadius={height * 0.32}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value: number) => [`${value}%`, 'Persentase']}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry: any) => `${value} (${entry.payload.value}%)`}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-gray-800">88%</div>
          <div className="text-xs text-gray-500">Total Utilisasi</div>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Min. Target:</span>
          <span className="text-green-600">85%</span>
        </div>
        <div className="mt-1 bg-green-50 border border-green-200 rounded px-2 py-1 text-xs text-green-700">
          ✓ Melampaui target minimum (88% {'>'} 85%)
        </div>
      </div>
    </div>
  );
}
