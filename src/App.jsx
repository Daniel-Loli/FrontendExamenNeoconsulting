// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Logistics from "./pages/Logistics";
import Inventory from "./pages/Inventory";
import Marketing from "./pages/Marketing";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-[#0b0f1a] min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/marketing" element={<Marketing />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}