// pages/Customers.jsx
import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../services/api";
import CustomBarChart from "../components/BarChart";

export default function Customers() {

  const { data } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => (await getCustomers()).data
  });

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">Clientes (Cohort)</h1>

      <CustomBarChart
        data={data || []}
        xKey="cohorte_mes"
        yKey="usuarios"
        title="Usuarios por Cohorte"
      />

    </div>
  );
}