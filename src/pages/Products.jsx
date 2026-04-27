// pages/Products.jsx
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";

export default function Products() {

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => (await getProducts()).data
  });

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-6">Productos</h1>

      <div className="bg-[#121826] p-5 rounded-2xl">
        {data?.map((p, i) => (
          <div key={i} className="flex justify-between py-2 border-b border-gray-800">
            <span>{p.product_id} - {p.marca}</span>
            <span className="text-purple-400">${p.ingresos.toFixed(2)}</span>
          </div>
        ))}
      </div>

    </div>
  );
} 