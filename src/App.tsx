import { useState } from "react";
import { KPICards } from "./components/KPICards";
import { ChartsContainer } from "./components/ChartsContainer";
import { ChevronDown } from "lucide-react";
import logoImage from "./assets/Logo PCS.png";

export default function App() {
  const [selectedPeriod, setSelectedPeriod] = useState(
    "Bulan Ini (Okt 2023)",
  );
  const [selectedVehicle, setSelectedVehicle] =
    useState("Semua Armada");
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);

  const periods = [
    "Bulan Ini (Okt 2023)",
    "7 Hari Terakhir",
    "30 Hari Terakhir",
    "Custom Range",
  ];

  const vehicles = [
    "Semua Armada",
    "W 8208 UE",
    "W 8209 UE",
    "W 8945 UD",
    "W 8363 UE",
    "W 9155 UK",
    "W 9154 UK",
    "W 8963 UD",
    "W 8964 UD",
    "W 8060 UK",
    "W 8061 UK",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header & Filter Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <img
                src={logoImage}
                alt="PCS Logo"
                className="h-12"
              />
              <h1 className="text-gray-800">
                Fleet Management System
              </h1>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              {/* Period Filter */}
              <div className="relative">
                <button
                  onClick={() => setIsPeriodOpen(!isPeriodOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors min-w-[220px]"
                >
                  <span>📅</span>
                  <span className="flex-1 text-left">
                    {selectedPeriod}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {isPeriodOpen && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {periods.map((period) => (
                      <button
                        key={period}
                        onClick={() => {
                          setSelectedPeriod(period);
                          setIsPeriodOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Vehicle Filter */}
              <div className="relative">
                <button
                  onClick={() =>
                    setIsVehicleOpen(!isVehicleOpen)
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors min-w-[220px]"
                >
                  <span>🚚</span>
                  <span className="flex-1 text-left">
                    {selectedVehicle}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {isVehicleOpen && (
                  <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {vehicles.map((vehicle) => (
                      <button
                        key={vehicle}
                        onClick={() => {
                          setSelectedVehicle(vehicle);
                          setIsVehicleOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {vehicle}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 py-6">
        {/* KPI Summary Cards */}
        <KPICards />

        {/* Charts Container */}
        <ChartsContainer />
      </div>
    </div>
  );
}