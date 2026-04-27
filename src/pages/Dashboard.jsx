// Dashboard.jsx
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
  const [kpis, setKpis] = useState({});
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [insight, setInsight] = useState("");
  const [lang, setLang] = useState("es");

  useEffect(() => {
    loadData();
  }, [lang]);

  const loadData = async () => {
    const kpiRes = await getKPIs(lang);
    const salesRes = await getSales();
    const prodRes = await getProducts(lang);
    const insightRes = await getInsights();

    setKpis(kpiRes.data[0]);
    setSales(salesRes.data);
    setProducts(prodRes.data.slice(0, 5));
    setInsight(insightRes.data.insight);
  };

  return (
    <div className="p-6 text-white">

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Resumen Ejecutivo</h1>

        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="bg-purple-600 px-4 py-2 rounded-lg"
        >
          Idioma ({lang})
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        <KPI title="Ingresos" value={kpis.ingresos_totales} />
        <KPI title="Órdenes" value={kpis.ordenes_totales} />
        <KPI title="Clientes" value={kpis.clientes_totales} />
        <KPI title="Ticket" value={kpis.ticket_promedio} />
        <KPI title="Cancelación" value={kpis.tasa_cancelacion} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <SalesChart data={sales} />
        </div>

        <CategoryChart data={products} />

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

        <div className="col-span-2">
          <Insights text={insight} />
        </div>
      </div>
    </div>
  );
}