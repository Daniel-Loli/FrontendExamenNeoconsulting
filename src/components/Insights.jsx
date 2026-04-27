export default function Insights({ data }) {
  if (!data) return null;

  const lines = data.split("\n").slice(0, 4);

  return (
    <div className="bg-[#1a2235] border border-purple-500 p-4 rounded-xl">
      <h3 className="text-purple-400 mb-2 font-semibold">
        Insights IA
      </h3>

      {lines.map((l, i) => (
        <p key={i} className="text-sm text-gray-300">
          • {l}
        </p>
      ))}
    </div>
  );
}