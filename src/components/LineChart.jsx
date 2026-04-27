// LineChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function SalesChart({ data }) {
  return (
    <div className="bg-[#121826] p-5 rounded-2xl">
      <h3 className="text-white mb-4">Ventas en el tiempo</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="fecha" stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ingresos"
            stroke="#8b5cf6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}