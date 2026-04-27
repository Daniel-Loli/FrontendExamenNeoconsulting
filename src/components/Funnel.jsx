// src/components/Funnel.jsx

export default function Funnel({ data }) {

  const top = data?.slice(0, 5);

  return (
    <div className="bg-[#121826] p-4 rounded-xl">
      <h3 className="mb-3 text-sm text-gray-300">
        Conversión por canal
      </h3>

      {top?.map((f, i) => (
        <div key={i} className="mb-2">
          <div className="flex justify-between text-xs">
            <span>{f.fuente_trafico}</span>
            <span>{(f.tasa_conversion * 100).toFixed(1)}%</span>
          </div>

          <div className="w-full bg-gray-700 h-1 rounded">
            <div
              className="bg-purple-500 h-1 rounded"
              style={{ width: `${f.tasa_conversion * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}