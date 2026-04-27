// components/TopProducts.jsx
export default function TopProducts({ data }) {

  const top = data?.slice(0, 5);

  return (
    <div className="bg-[#121826] p-4 rounded-xl">
      <h3 className="mb-3 text-sm text-gray-300">Top Productos</h3>

      {top?.map((p, i) => (
        <div key={i} className="flex justify-between text-sm mb-1">
          <span>{p.marca}</span>
          <span className="text-purple-400">
            ${p.ingresos.toFixed(0)}
          </span>
        </div>
      ))}
    </div>
  );
}