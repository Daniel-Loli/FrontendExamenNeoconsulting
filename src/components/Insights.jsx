export default function Insights({ text }) {
  return (
    <div className="bg-[#121826] p-5 rounded-2xl text-white">
      <h3 className="text-purple-400 mb-3">Insights IA</h3>

      <p className="text-sm leading-relaxed whitespace-pre-line">
        {text || "No hay insights disponibles"}
      </p>
    </div>
  );
}