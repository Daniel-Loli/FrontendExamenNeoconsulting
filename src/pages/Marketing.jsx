// pages/Marketing.jsx
import { useQuery } from "@tanstack/react-query";
import { getFunnel } from "../services/api";
import CustomBarChart from "../components/BarChart";

export default function Marketing() {

  const { data } = useQuery({
    queryKey: ["funnel"],
    queryFn: async () => (await getFunnel()).data
  });

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">Marketing & Funnel</h1>

      <CustomBarChart
        data={data || []}
        xKey="fuente_trafico"
        yKey="tasa_conversion"
        title="Tasa de Conversión"
      />

    </div>
  );
}