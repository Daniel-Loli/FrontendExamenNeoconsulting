// Sidebar.jsx
import { Link, useLocation } from "react-router-dom";

const items = [
  { name: "Resumen Ejecutivo", path: "/" },
  { name: "Ventas", path: "/sales" },
  { name: "Productos", path: "/products" },
  { name: "Clientes", path: "/customers" },
  { name: "Logística", path: "/logistics" },
  { name: "Inventario", path: "/inventory" },
  { name: "Marketing & Funnel", path: "/marketing" }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-[#0b0f1a] border-r border-gray-800 p-6 text-white">
      <h1 className="text-purple-400 font-bold mb-8">NEOCONSULTING</h1>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              to={item.path}
              className={`block p-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-purple-600"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}