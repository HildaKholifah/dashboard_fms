import { FuelEfficiencyChart } from './FuelEfficiencyChart';
import { UtilizationChart } from './UtilizationChart';
import { LoadFactorChart } from './LoadFactorChart';
import { CostPerKmChart } from './CostPerKmChart';

export function ChartsContainer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <FuelEfficiencyChart height={180} />
      <UtilizationChart height={180} />
      <LoadFactorChart height={140} />
      <CostPerKmChart height={180} />
    </div>
  );
}
