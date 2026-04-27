// PieChart.jsx
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#8b5cf6", "#6366f1", "#22c55e", "#f59e0b"];

export default function CategoryChart({ data }) {
  return (
    <div className="bg-[#121826] p-5 rounded-2xl">
      <h3 className="text-white mb-4">Ventas por categoría</h3>

      <PieChart width={300} height={250}>
        <Pie data={data} dataKey="ingresos" nameKey="categoria">
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}