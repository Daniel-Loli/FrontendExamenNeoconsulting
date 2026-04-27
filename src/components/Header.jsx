export default function Header({
  filters,
  setFilters,
  categories,
  channels
}) {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-xl font-bold text-purple-400">
          NEOCONSULTING
        </h1>
        <p className="text-xs text-gray-400">
          Dashboard Ejecutivo Ecommerce
        </p>
      </div>

      <div className="flex gap-2">

        {/* CATEGORÍA */}
        <select
          className="bg-[#121826] p-2 rounded text-xs"
          onChange={(e) =>
            setFilters(f => ({ ...f, category: e.target.value }))
          }
        >
          <option value="">Categoría</option>
          {categories?.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* CANAL */}
        <select
          className="bg-[#121826] p-2 rounded text-xs"
          onChange={(e) =>
            setFilters(f => ({ ...f, channel: e.target.value }))
          }
        >
          <option value="">Canal</option>
          {channels?.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>

      </div>
    </div>
  );
}