export default function Insights({ text }) {
  if (!text) {
    return (
      <div className="bg-[#1f2937] p-5 rounded-2xl text-white animate-pulse">
        Cargando insights...
      </div>
    );
  }

  // Separar por secciones (simple parsing)
  const sections = text.split("\n\n");

  return (
    <div className="bg-[#1f2937] p-5 rounded-2xl text-white">
      <h3 className="text-purple-400 mb-4 text-lg font-semibold">
        🤖 Insights Inteligentes
      </h3>

      <div className="space-y-4 text-sm leading-relaxed">
        {sections.map((sec, i) => (
          <div key={i} className="bg-[#111827] p-3 rounded-lg">
            {sec}
          </div>
        ))}
      </div>
    </div>
  );
}