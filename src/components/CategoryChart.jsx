// components/CategoryChart.jsx
import { PieChart, Pie, Cell } from "recharts";

const colors = ["#8b5cf6", "#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

export default function CategoryChart({ data }) {

  const top = data
    ?.reduce((acc, cur) => {
      acc[cur.categoria] =
        (acc[cur.categoria] || 0) + cur.ingresos;
      return acc;
    }, {});

  const formatted = Object.entries(top || {})
    .map(([k, v]) => ({ categoria: k, ingresos: v }))
    .sort((a, b) => b.ingresos - a.ingresos)
    .slice(0, 5);

  return (
    <div className="bg-[#121826] p-4 rounded-xl h-[260px] flex justify-center">
      <PieChart width={220} height={220}>
        <Pie data={formatted} dataKey="ingresos">
          {formatted.map((_, i) => (
            <Cell key={i} fill={colors[i]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}