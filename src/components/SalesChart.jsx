// components/SalesChart.jsx
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function SalesChart({ data }) {

const clean = data
  ?.map(d => {
    const raw = d.fecha?.value || d.fecha;

    const date = new Date(raw);

    return {
      fecha: isNaN(date)
        ? null
        : date.toISOString().slice(0, 7),
      ingresos: Number(d.ingresos)
    };
  })
  .filter(d => d.fecha);

  return (
    <div className="bg-[#121826] p-4 rounded-xl h-[260px]">
      <h3 className="mb-3 text-sm text-gray-300">
        Evolución de ingresos
      </h3>

      <ResponsiveContainer>
        <LineChart data={clean}>
          <XAxis dataKey="fecha" hide />
          <Tooltip />
          <Line
            dataKey="ingresos"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}