import { FuelEfficiencyChart } from './FuelEfficiencyChart';
import { UtilizationChart } from './UtilizationChart';
import { LoadFactorChart } from './LoadFactorChart';
import { CostPerKmChart } from './CostPerKmChart';

export function ChartsContainer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <FuelEfficiencyChart height={300} />
      <UtilizationChart height={320} />
      <LoadFactorChart height={200} />
      <CostPerKmChart height={300} />
    </div>
  );
}
