// App.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#0b0f1a] min-h-screen">
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
}