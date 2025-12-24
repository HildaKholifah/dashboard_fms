import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';

type Props = { height?: number };

const budgetLimit = 7000;

const data = [
  { week: 'Minggu 1', cost: 6500 },
  { week: 'Minggu 2', cost: 6800 },
  { week: 'Minggu 3', cost: 7200 },
  { week: 'Minggu 4', cost: 6300 },
];

export function CostPerKmChart({ height = 300 }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="mb-2">
        <h3 className="text-gray-800 text-sm mb-1">Perbandingan Cost per KM</h3>
        <p className="text-xs text-gray-500">Biaya operasional per minggu</p>
      </div>
      
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="week" 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `Rp ${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px'
            }}
            formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, 'Biaya']}
          />
          <ReferenceLine 
            y={budgetLimit} 
            stroke="#ef4444" 
            strokeDasharray="5 5" 
            label={{ 
              value: 'Batas Anggaran (Rp 7k)', 
              position: 'right',
              fill: '#ef4444',
              fontSize: 12
            }}
          />
          <Bar dataKey="cost" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.cost > budgetLimit ? '#ef4444' : '#3b82f6'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      <div className="mt-2 space-y-1">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 bg-blue-500 rounded"></div>
            <span className="text-gray-600">Dalam Anggaran</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-3 bg-red-500 rounded"></div>
            <span className="text-gray-600">Melebihi Anggaran</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-red-500 border-dashed border-t-2 border-red-500"></div>
            <span className="text-gray-600">Batas (Rp 7.000)</span>
          </div>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded px-3 py-2 text-xs text-red-700">
          ⚠ Minggu 3 melampaui anggaran sebesar Rp 200
        </div>
      </div>
    </div>
  );
}
