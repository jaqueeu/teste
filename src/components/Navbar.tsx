import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Consulting CRM
        </Link>
        <div className="space-x-4">
          <Link href="/clients" className="hover:underline">Clientes</Link>
          <Link href="/suppliers" className="hover:underline">Fornecedores</Link>
          <Link href="/sinir" className="hover:underline">SINIR (MTRs)</Link>
        </div>
      </div>
    </nav>
  );
}
