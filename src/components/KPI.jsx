export default function KPI({ title, value }) {
  const format = (v) => {
    if (!v && v !== 0) return "-";

    if (v < 1) return (v * 100).toFixed(1) + "%";

    return v.toLocaleString();
  };

  return (
    <div className="bg-[#121826] p-3 rounded-xl">
      <p className="text-xs text-gray-400">{title}</p>
      <p className="text-lg font-bold text-white">
        {format(value)}
      </p>
      <div className="h-1 bg-purple-500 mt-2 rounded" />
    </div>
  );
}