// pages/Sales.jsx
import { useQuery } from "@tanstack/react-query";
import { getSales } from "../services/api";
import SalesChart from "../components/LineChart";

export default function Sales() {

  const { data } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => (await getSales()).data
  });

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">Ventas</h1>

      <SalesChart data={data || []} />

    </div>
  );
}