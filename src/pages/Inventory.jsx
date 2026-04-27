// pages/Inventory.jsx
import { useQuery } from "@tanstack/react-query";
import { getInventory } from "../services/api";
import CustomBarChart from "../components/BarChart";

export default function Inventory() {

  const { data } = useQuery({
    queryKey: ["inventory"],
    queryFn: async () => (await getInventory()).data
  });

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">Inventario</h1>

      <CustomBarChart
        data={data || []}
        xKey="categoria"
        yKey="stock_actual"
        title="Stock por Categoría"
      />

    </div>
  );
}