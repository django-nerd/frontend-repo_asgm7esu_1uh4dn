import Header from '../components/Header'
import ProductSection from '../components/ProductSection'

const beautyAR = [
  { name: 'Gel limpiador para todo tipo de piel', links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }] },
  { name: 'Sérum de vitamina C local', links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }] },
  { name: 'Protector solar FPS 50', links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }] },
]

const fitnessAR = [
  { name: 'Calzas deportivas talle alto', links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }] },
  { name: 'Top deportivo reforzado', links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }] },
]

const shoesAR = [
  { name: 'Zapatillas running livianas', links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }] },
  { name: 'Zapatillas urbanas / lifestyle', links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }] },
]

function Argentina() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black text-slate-900">Mis Recomendados Argentina</h1>
        <p className="mt-2 text-slate-700">Una selección pensada para acompañar tu rutina: skincare efectivo, ropa deportiva cómoda y zapatillas ideales para entrenar o usar todos los días. Descubrí opciones confiables y accesibles dentro de Argentina, todo en un solo lugar.</p>
      </div>

      <ProductSection title="Belleza (AR)" items={beautyAR} />
      <ProductSection title="Fitness / Ropa Deportiva (AR)" items={fitnessAR} />
      <ProductSection title="Zapatillas (AR)" items={shoesAR} />
    </div>
  )
}

export default Argentina
