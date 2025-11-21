import Header from '../components/Header'
import ProductSection from '../components/ProductSection'

const beautyUSA = [
  { name: 'Limpiador Facial Suave', note: 'Ideal para piel sensible.', links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }] },
  { name: 'Sérum de Vitamina C', note: 'Ilumina y mejora la textura.', links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }] },
  { name: 'Protector Solar Diario', note: 'Ligero, no deja brillo.', links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }] },
]

const fitnessUSA = [
  { name: 'Calzas moldeadoras de talle alto', note: 'Cómodas, no transparentan.', links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }] },
  { name: 'Top deportivo alto impacto', note: 'Buen soporte y diseño.', links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }] },
]

const shoesUSA = [
  { name: 'Running – Livianas y cómodas', note: 'Para caminar o entrenar.', links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }, { href: 'https://nike.com', label: 'Ver en Nike' }] },
  { name: 'Zapatillas lifestyle clásicas', note: 'Combinan con todo.', links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }] },
]

function USA() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black text-slate-900">Mis Recomendaciones USA</h1>
        <p className="mt-2 text-slate-700">Productos de belleza, ropa deportiva y zapatillas disponibles en Estados Unidos. Todos los enlaces son de afiliados.</p>
      </div>

      <ProductSection title="Belleza (USA)" items={beautyUSA} />
      <ProductSection title="Fitness / Ropa Deportiva (USA)" items={fitnessUSA} />
      <ProductSection title="Zapatillas (USA)" items={shoesUSA} />
    </div>
  )
}

export default USA
