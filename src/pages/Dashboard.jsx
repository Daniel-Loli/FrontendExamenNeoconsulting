import { useEffect, useState } from "react";
import {
  getKPIs,
  getSales,
  getProducts,
  getInsights
} from "../services/api";

import KPI from "../components/KPI";
import SalesChart from "../components/LineChart";
import CategoryChart from "../components/PieChart";
import Insights from "../components/Insights";

export default function Dashboard() {
  const [kpis, setKpis] = useState(null);
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [insight, setInsight] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [kpiRes, salesRes, prodRes, insightRes] =
        await Promise.all([
          getKPIs(),
          getSales(),
          getProducts(),
          getInsights()
        ]);

      // ✅ KPIs
      if (kpiRes.data?.length > 0) {
        setKpis(kpiRes.data[0]);
      }

      // ✅ SALES (ya corregido backend)
      setSales(salesRes.data || []);

      // ✅ PRODUCTS
      setProducts(prodRes.data?.slice(0, 5) || []);

      // ✅ INSIGHTS (seguro)
      if (insightRes.data?.insight) {
        setInsight(insightRes.data.insight);
      } else {
        setInsight("No se pudieron generar insights");
      }

    } catch (error) {
      console.error("Error cargando dashboard:", error);
    }
  };

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">
        Resumen Ejecutivo
      </h1>

      {/* KPIs */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <KPI title="Ingresos" value={kpis?.ingresos_totales} />
        <KPI title="Órdenes" value={kpis?.ordenes_totales} />
        <KPI title="Clientes" value={kpis?.clientes_totales} />
        <KPI title="Ticket" value={kpis?.ticket_promedio} />
      </div>

      <div className="grid grid-cols-3 gap-6">

        {/* CHART */}
        <div className="col-span-2">
          <SalesChart data={sales} />
        </div>

        {/* PIE */}
        <CategoryChart data={products} />

        {/* TOP PRODUCTS */}
        <div className="bg-[#121826] p-5 rounded-2xl">
          <h3 className="mb-4">Top Productos</h3>

          {products.map((p, i) => (
            <div key={i} className="flex justify-between text-sm mb-2">
              <span>{p.product_id}</span>
              <span className="text-purple-400">
                ${p.ingresos?.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* INSIGHTS */}
        <div className="col-span-2">
          <Insights text={insight || "Cargando insights..."} />
        </div>

      </div>
    </div>
  );
}