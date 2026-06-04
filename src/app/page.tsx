import Link from "next/link";
import { Users, Truck, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/clients" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-4">
            <Users size={32} className="text-blue-600" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Clientes</h5>
          </div>
          <p className="font-normal text-gray-700 mt-2">Gerencie seus clientes de consultoria.</p>
        </Link>

        <Link href="/suppliers" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-4">
            <Truck size={32} className="text-green-600" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Fornecedores</h5>
          </div>
          <p className="font-normal text-gray-700 mt-2">Gerencie seus fornecedores de serviços.</p>
        </Link>

        <Link href="/sinir" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-4">
            <FileText size={32} className="text-purple-600" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">SINIR (MTRs)</h5>
          </div>
          <p className="font-normal text-gray-700 mt-2">Emissão de MTRs no SINIR Paraná.</p>
        </Link>
      </div>
    </div>
  );
}
