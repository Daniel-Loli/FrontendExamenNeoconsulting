import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getKPIs,
  getSales,
  getProducts,
  getFunnel,
  getInsights,
  getInventory,
  getLogistics,
  getCustomers
} from "../services/api";

import Header from "../components/Header";
import KPI from "../components/KPI";
import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";
import TopProducts from "../components/TopProducts";
import Funnel from "../components/Funnel";
import Insights from "../components/Insights";
import CustomBarChart from "../components/BarChart";

export default function Dashboard() {
  const [filters, setFilters] = useState({});

  // ================= DATA =================
  const { data: kpis } = useQuery({
    queryKey: ["kpis"],
    queryFn: async () => (await getKPIs()).data
  });

  const { data: sales } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => (await getSales()).data
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => (await getProducts()).data
  });

  const { data: funnel } = useQuery({
    queryKey: ["funnel"],
    queryFn: async () => (await getFunnel()).data
  });

  const { data: insights } = useQuery({
    queryKey: ["insights"],
    queryFn: async () => (await getInsights()).data
  });

  const { data: inventory } = useQuery({
    queryKey: ["inventory"],
    queryFn: async () => (await getInventory()).data
  });

  const { data: logistics } = useQuery({
    queryKey: ["logistics"],
    queryFn: async () => (await getLogistics()).data
  });

  const { data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => (await getCustomers()).data
  });

  // ================= FILTROS =================
  const applyFilters = (data, type) => {
    if (!data) return [];

    return data.filter(item => {
      if (filters.date && type === "sales") {
        const raw = item.fecha?.value || item.fecha;
        if (!raw?.includes(filters.date)) return false;
      }

      if (filters.category && item.categoria) {
        if (item.categoria !== filters.category) return false;
      }

      if (filters.channel && item.fuente_trafico) {
        if (item.fuente_trafico !== filters.channel) return false;
      }

      return true;
    });
  };

  const salesFiltered = applyFilters(sales, "sales");
  const productsFiltered = applyFilters(products, "products");
  const funnelFiltered = applyFilters(funnel, "funnel");

  // dinámicos
  const categories = [...new Set(products?.map(p => p.categoria))];
  const channels = [...new Set(funnel?.map(f => f.fuente_trafico))];

  const k = kpis?.[0];

  return (
    <div className="p-4 space-y-4 text-white">

      <Header
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        channels={channels}
      />

      {/* ================= KPIs ================= */}
      <div className="grid grid-cols-5 gap-3">
        <KPI title="Ingresos" value={k?.ingresos_totales} />
        <KPI title="Órdenes" value={k?.ordenes_totales} />
        <KPI title="Clientes" value={k?.clientes_totales} />
        <KPI title="Ticket" value={k?.ticket_promedio} />
        <KPI title="Cancelación" value={k?.tasa_cancelacion} />
      </div>

      {/* ================= IA STORY ================= */}
      <Insights data={insights?.insight} />

      {/* ================= MAIN ================= */}
      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2">
          <SalesChart data={salesFiltered} />
        </div>

        <CategoryChart data={productsFiltered} />

      </div>

      {/* ================= MID ================= */}
      <div className="grid grid-cols-3 gap-4">

        <TopProducts data={productsFiltered} />

        <Funnel data={funnelFiltered} />

        <div className="bg-[#121826] p-4 rounded-xl text-sm">
          <h3 className="text-purple-400 mb-2">
            Performance Logístico
          </h3>

          <p>Entrega: {logistics?.tiempo_entrega?.toFixed(2)} días</p>
          <p>Devolución: {(logistics?.tasa_devolucion * 100).toFixed(1)}%</p>
          <p>Cancelación: {(logistics?.tasa_cancelacion * 100).toFixed(1)}%</p>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="col-span-2">
        <CustomBarChart
          data={customers?.slice(-10)}
          xKey="cohorte_mes"
          yKey="usuarios"
          title="Cohorte de Clientes"
        />
      </div>

    </div>
  );
}