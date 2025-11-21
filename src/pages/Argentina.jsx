import Header from '../components/Header'
import ProductSection from '../components/ProductSection'

const beautyAR = [
  {
    name: 'Gel limpiador para todo tipo de piel',
    image: 'https://images.unsplash.com/photo-1604393587377-bbe4a437ec80?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHZWwlMjBsaW1waWFkb3IlMjBwYXJhJTIwdG9kb3xlbnwwfDB8fHwxNzYzNzU0NTgwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Gel limpiador facial',
    links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }],
  },
  {
    name: 'Sérum de vitamina C local',
    image: 'https://images.unsplash.com/photo-1694101674840-8b568dae128e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTJUMzJUE5cnVtJTIwZGUlMjB2aXRhbWluYSUyMEMlMjBsb2NhbHxlbnwwfDB8fHwxNzYzNzU0NTgxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Sérum de vitamina C',
    links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }],
  },
  {
    name: 'Protector solar FPS 50',
    image: 'https://images.unsplash.com/photo-1662601311311-c4422d17abf6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm90ZWN0b3IlMjBzb2xhciUyMEZQUyUyMDUwfGVufDB8MHx8fDE3NjM3NTQ1ODF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Protector solar FPS 50',
    links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }],
  },
]

const fitnessAR = [
  {
    name: 'Calzas deportivas talle alto',
    image: 'https://images.unsplash.com/photo-1724653864524-171c31a41c28?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYWx6YXMlMjBkZXBvcnRpdmFzJTIwdGFsbGUlMjBhbHRvfGVufDB8MHx8fDE3NjM3NTQ1ODJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Calzas deportivas',
    links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }],
  },
  {
    name: 'Top deportivo reforzado',
    image: 'https://images.unsplash.com/photo-1584196825674-e6f64590b914?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM3NTQ1ODJ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Top deportivo',
    links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }],
  },
]

const shoesAR = [
  {
    name: 'Zapatillas running livianas',
    image: 'https://images.unsplash.com/photo-1629556057490-d2e79360dddd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaYXBhdGlsbGFzJTIwcnVubmluZyUyMGxpdmlhbmFzfGVufDB8MHx8fDE3NjM3NTQ1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Zapatillas running livianas',
    links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }],
  },
  {
    name: 'Zapatillas urbanas / lifestyle',
    image: 'https://images.unsplash.com/photo-1560565331-7358080400f7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaYXBhdGlsbGFzJTIwdXJiYW5hcyUyMCUyRiUyMGxpZmVzdHlsZXxlbnwwfDB8fHwxNzYzNzU0NTgzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Zapatillas urbanas',
    links: [{ href: 'https://mercadolibre.com.ar', label: 'Ver en Mercado Libre' }],
  },
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
