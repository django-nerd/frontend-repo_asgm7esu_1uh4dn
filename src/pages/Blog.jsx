import Header from '../components/Header'

const essentials = [
  { name: 'Limpiador Facial Suave', links: [{ href: 'https://amazon.com', label: 'USA' }, { href: 'https://mercadolibre.com.ar', label: 'AR' }] },
  { name: 'Sérum de Vitamina C', links: [{ href: 'https://amazon.com', label: 'USA' }, { href: 'https://mercadolibre.com.ar', label: 'AR' }] },
  { name: 'Protector Solar Diario', links: [{ href: 'https://amazon.com', label: 'USA' }, { href: 'https://mercadolibre.com.ar', label: 'AR' }] },
  { name: 'Calzas talle alto', links: [{ href: 'https://amazon.com', label: 'USA' }, { href: 'https://mercadolibre.com.ar', label: 'AR' }] },
  { name: 'Top deportivo', links: [{ href: 'https://amazon.com', label: 'USA' }, { href: 'https://mercadolibre.com.ar', label: 'AR' }] },
  { name: 'Zapatillas running', links: [{ href: 'https://amazon.com', label: 'USA' }, { href: 'https://mercadolibre.com.ar', label: 'AR' }] },
  { name: 'Zapatillas lifestyle', links: [{ href: 'https://amazon.com', label: 'USA' }, { href: 'https://mercadolibre.com.ar', label: 'AR' }] },
  { name: 'Proteína en polvo', links: [{ href: 'https://amazon.com', label: 'USA' }, { href: 'https://mercadolibre.com.ar', label: 'AR' }] },
]

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black text-slate-900 mb-2">Mis 8 esenciales de belleza y fitness para este mes</h1>
        <p className="text-slate-700 mb-6">Una lista simple con enlaces para USA y Argentina.</p>

        <ol className="space-y-4 list-decimal pl-5">
          {essentials.map((item, idx) => (
            <li key={idx} className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="font-semibold text-slate-900">{item.name}</div>
              <div className="mt-2 flex items-center gap-3">
                {item.links.map((l, li) => (
                  <a key={li} href={l.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">{l.label}</a>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Blog
