import KPI from "./KPI";

export default function KPIs({ data }) {
  if (!data) return null;

  return (
    <div className="grid grid-cols-5 gap-3">

      <KPI title="Ingresos" value={data.ingresos_totales} />
      <KPI title="Órdenes" value={data.ordenes_totales} />
      <KPI title="Clientes" value={data.clientes_totales} />
      <KPI title="Ticket" value={data.ticket_promedio} />

      {/* opcional si quieres agregar más */}
      <KPI title="Estado" value="OK" />

    </div>
  );
}