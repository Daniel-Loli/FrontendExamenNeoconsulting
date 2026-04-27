export default function KPI({ title, value }) {
  return (
    <div className="bg-[#121826] p-4 rounded-xl shadow-md">
      <p className="text-gray-400 text-xs">{title}</p>

      <h2 className="text-xl font-bold mt-1">
        {value !== undefined && value !== null
          ? Number(value).toLocaleString()
          : "-"}
      </h2>

      <div className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mt-3 rounded-full"></div>
    </div>
  );
}