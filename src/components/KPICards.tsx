import { TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

interface KPICardProps {
  icon: string;
  title: string;
  actual: string;
  status: 'good' | 'bad' | 'warning';
  statusText: string;
  ideal: string;
  accentColor: string;
}

function KPICard({ icon, title, actual, status, statusText, ideal, accentColor }: KPICardProps) {
  const statusConfig = {
    good: { icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
    bad: { icon: TrendingDown, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
    warning: { icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className={`text-3xl ${accentColor}`}>{icon}</div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded ${statusConfig[status].bg} ${statusConfig[status].border} border`}>
          <StatusIcon className={`w-4 h-4 ${statusConfig[status].color}`} />
          <span className={`text-xs ${statusConfig[status].color}`}>{statusText}</span>
        </div>
      </div>
      
      <div className="mb-1">
        <h3 className="text-gray-600 text-xs mb-1">{title}</h3>
        <div className="text-sm mb-2">{actual}</div>
      </div>
      
      <div className="text-xs text-gray-400">
        Ideal: {ideal}
      </div>
    </div>
  );
}

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <KPICard
        icon="⛽"
        title="FUEL EFFICIENCY"
        actual="4.2 KM/L"
        status="bad"
        statusText="Di bawah target"
        ideal="> 4.5 KM/L"
        accentColor="text-red-500"
      />
      <KPICard
        icon="⏱️"
        title="UTILIZATION RATE"
        actual="88%"
        status="good"
        statusText="Mantap (On Track)"
        ideal="> 85%"
        accentColor="text-green-500"
      />
      <KPICard
        icon="📦"
        title="AVG LOAD FACTOR"
        actual="72%"
        status="warning"
        statusText="Perlu ditingkatkan"
        ideal="85% - 95%"
        accentColor="text-yellow-500"
      />
      <KPICard
        icon="💰"
        title="COST PER KM"
        actual="Rp 6.800"
        status="good"
        statusText="Hemat (Under Budget)"
        ideal="< Rp 7.000"
        accentColor="text-green-500"
      />
    </div>
  );
}
