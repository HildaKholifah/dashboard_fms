type Props = { height?: number };

export function LoadFactorChart({ height = 180 }: Props) {
  const currentValue = 72;
  const idealMin = 85;
  const idealMax = 95;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4" style={{ minHeight: height }}>
      <div className="mb-2">
        <h3 className="text-gray-800 text-sm mb-1">Faktor Muatan / Kapasitas</h3>
        <p className="text-xs text-gray-500">Persentase pemanfaatan kapasitas</p>
      </div>
      
      <div className="mt-8">
        {/* Main Progress Bar */}
        <div className="relative h-12 bg-gray-200 rounded-lg overflow-hidden">
          {/* Ideal Zone Background */}
          <div 
            className="absolute h-full bg-green-100 border-l-2 border-r-2 border-green-300"
            style={{ 
              left: `${idealMin}%`, 
              width: `${idealMax - idealMin}%` 
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] text-green-700">Zona Ideal</span>
            </div>
          </div>
          
          {/* Current Value Fill */}
          <div 
            className="absolute h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${currentValue}%` }}
          ></div>
          
          {/* Current Value Label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white drop-shadow-md">{currentValue}%</span>
          </div>
        </div>
        
        {/* Scale Markers */}
        <div className="relative mt-2 h-6">
          <div className="absolute left-0 text-xs text-gray-500">0%</div>
          <div 
            className="absolute text-xs text-green-600"
            style={{ left: `${idealMin}%`, transform: 'translateX(-50%)' }}
          >
            ↑ 85%
          </div>
          <div 
            className="absolute text-xs text-green-600"
            style={{ left: `${idealMax}%`, transform: 'translateX(-50%)' }}
          >
            ↑ 95%
          </div>
          <div className="absolute right-0 text-xs text-gray-500">100%</div>
        </div>
      </div>
      
      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Kapasitas Saat Ini:</span>
          <span className="text-blue-600">{currentValue}%</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Zona Ideal:</span>
          <span className="text-green-600">{idealMin}% - {idealMax}%</span>
        </div>
      </div>
      
      <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded px-2 py-1 text-xs text-yellow-700">
        ⚠ Di bawah zona ideal. Tingkatkan muatan untuk efisiensi optimal.
      </div>
    </div>
  );
}
