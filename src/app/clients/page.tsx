import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default async function ClientsPage() {
  const clients = await prisma.client.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Clientes</h1>
        <Link href="/clients/new" className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700">
          <Plus size={20} className="mr-2" />
          Novo Cliente
        </Link>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">Nome</th>
              <th scope="col" className="py-3 px-6">Email</th>
              <th scope="col" className="py-3 px-6">Telefone</th>
              <th scope="col" className="py-3 px-6">Documento</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="bg-white border-b hover:bg-gray-50">
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{client.name}</td>
                <td className="py-4 px-6">{client.email || '-'}</td>
                <td className="py-4 px-6">{client.phone || '-'}</td>
                <td className="py-4 px-6">{client.document || '-'}</td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td colSpan={4} className="py-4 px-6 text-center text-gray-500">Nenhum cliente cadastrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
