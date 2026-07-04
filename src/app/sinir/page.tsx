import { sinirClient } from '@/lib/sinir/api';
import prisma from '@/lib/prisma';
import { getValidString } from '@/lib/validation';

export default async function SinirPage() {
  const clients = await prisma.client.findMany();
  const suppliers = await prisma.supplier.findMany();

  async function handleEmitirMTR(formData: FormData) {
    'use server';

    const geradorId = getValidString(formData, 'geradorId', 255);
    const transportadorId = getValidString(formData, 'transportadorId', 255);
    const destinadorId = getValidString(formData, 'destinadorId', 255);

    const result = await sinirClient.emitirMTR({
      geradorId,
      transportadorId,
      destinadorId,
      residuos: [
        {
          codigoIBAMA: '1000001',
          quantidade: 100,
          unidade: 'KG',
          estadoFisico: 'SOLIDO',
          classe: 'I'
        }
      ]
    });

    console.log('Resultado da emissão:', result);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Emissão de MTR - SINIR PR</h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-700">
          Esta é uma interface de demonstração. A integração real com o SINIR PR exigirá credenciais oficiais e possivelmente ajustes nos campos de acordo com a documentação da API.
        </p>
      </div>

      <form action={handleEmitirMTR} className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-2xl">
        <div>
          <label htmlFor="geradorId" className="block text-sm font-medium text-gray-700">Gerador (Cliente)</label>
          <select name="geradorId" id="geradorId" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 border p-2">
            <option value="">Selecione o gerador</option>
            {clients.map(c => (
              <option key={c.id} value={c.id}>{c.name} - {c.document}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="transportadorId" className="block text-sm font-medium text-gray-700">Transportador (Fornecedor)</label>
          <select name="transportadorId" id="transportadorId" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 border p-2">
            <option value="">Selecione o transportador</option>
            {suppliers.map(s => (
              <option key={s.id} value={s.id}>{s.name} - {s.document}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="destinadorId" className="block text-sm font-medium text-gray-700">Destinador (Fornecedor)</label>
          <select name="destinadorId" id="destinadorId" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 border p-2">
            <option value="">Selecione o destinador final</option>
            {suppliers.map(s => (
              <option key={s.id} value={s.id}>{s.name} - {s.document}</option>
            ))}
          </select>
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-lg font-medium mb-2">Resíduos (Mock)</h3>
          <p className="text-sm text-gray-500 mb-4">Para este exemplo, estamos enviando um resíduo sólido padrão de 100KG.</p>
        </div>

        <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
          Emitir MTR de Teste
        </button>
      </form>
    </div>
  );
}
