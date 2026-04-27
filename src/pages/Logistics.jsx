// pages/Logistics.jsx
import { useQuery } from "@tanstack/react-query";
import { getLogistics } from "../services/api";
import KPI from "../components/KPI";

export default function Logistics() {

  const { data } = useQuery({
    queryKey: ["logistics"],
    queryFn: async () => (await getLogistics()).data
  });

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">Logística</h1>

      <div className="grid grid-cols-3 gap-4">

        <KPI title="Tiempo entrega" value={data?.tiempo_promedio_entrega} />
        <KPI title="Devolución" value={data?.tasa_devolucion} />
        <KPI title="Cancelación" value={data?.tasa_cancelacion} />

      </div>

    </div>
  );
}