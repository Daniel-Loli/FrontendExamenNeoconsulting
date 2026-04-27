// components/BarChart.jsx
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CustomBarChart({ data, xKey, yKey, title }) {
  return (
    <div className="bg-[#121826] p-5 rounded-2xl">
      <h3 className="text-white mb-4">{title}</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey={xKey} stroke="#aaa" />
          <Tooltip />
          <Bar dataKey={yKey} fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}