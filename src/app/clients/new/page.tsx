import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { getValidString } from '@/lib/validation';

export default function NewClientPage() {
  async function createClient(formData: FormData) {
    'use server';

    const name = getValidString(formData, 'name');
    const email = getValidString(formData, 'email');
    const phone = getValidString(formData, 'phone', 50);
    const document = getValidString(formData, 'document', 50);

    if (!name) return;

    await prisma.client.create({
      data: { name, email, phone, document }
    });

    redirect('/clients');
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Novo Cliente</h1>
        <Link href="/clients" className="text-blue-600 hover:underline">Voltar</Link>
      </div>

      <form action={createClient} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
          <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
          <input type="text" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
        </div>

        <div>
          <label htmlFor="document" className="block text-sm font-medium text-gray-700">Documento (CPF/CNPJ)</label>
          <input type="text" name="document" id="document" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Salvar Cliente
        </button>
      </form>
    </div>
  );
}
