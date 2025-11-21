import Header from '../components/Header'
import ProductSection from '../components/ProductSection'

const beautyUSA = [
  {
    name: 'Limpiador Facial Suave',
    note: 'Ideal para piel sensible.',
    image: 'https://images.unsplash.com/photo-1734599895291-d25a27e4cb45?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaW1waWFkb3IlMjBGYWNpYWwlMjBTdWF2ZXxlbnwwfDB8fHwxNzYzNzU0NTc3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Limpiador facial suave',
    links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }],
  },
  {
    name: 'Sérum de Vitamina C',
    note: 'Ilumina y mejora la textura.',
    image: 'https://images.unsplash.com/photo-1694101674840-8b568dae128e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTJUMzJUE5cnVtJTIwZGUlMjBWaXRhbWluYSUyMEN8ZW58MHwwfHx8MTc2Mzc1NDU3N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Sérum de vitamina C',
    links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }],
  },
  {
    name: 'Protector Solar Diario',
    note: 'Ligero, no deja brillo.',
    image: 'https://images.unsplash.com/photo-1738660816721-97ca0038b1c1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm90ZWN0b3IlMjBTb2xhciUyMERpYXJpb3xlbnwwfDB8fHwxNzYzNzU0NTc4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Protector solar diario',
    links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }],
  },
]

const fitnessUSA = [
  {
    name: 'Calzas moldeadoras de talle alto',
    note: 'Cómodas, no transparentan.',
    image: 'https://images.unsplash.com/photo-1566392722006-b3ccec017bec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYWx6YXMlMjBtb2xkZWFkb3JhcyUyMGRlJTIwdGFsbGV8ZW58MHwwfHx8MTc2Mzc1NDU3OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Calzas deportivas talle alto',
    links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }],
  },
  {
    name: 'Top deportivo alto impacto',
    note: 'Buen soporte y diseño.',
    image: 'https://images.unsplash.com/photo-1729437025620-50352c70f268?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM3NTQ1Nzl8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Top deportivo alto impacto',
    links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }],
  },
]

const shoesUSA = [
  {
    name: 'Running – Livianas y cómodas',
    note: 'Para caminar o entrenar.',
    image: 'https://images.unsplash.com/photo-1611080027047-33ea982bef84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSdW5uaW5nJTIwJUUyJTgwJTkzJTIwTGl2aWFuYXMlMjB5JTIwYyVDMyVCM21vZGFzfGVufDB8MHx8fDE3NjM3NTQ1Nzl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Zapatillas de running',
    links: [
      { href: 'https://amazon.com', label: 'Ver en Amazon' },
      { href: 'https://nike.com', label: 'Ver en Nike' },
    ],
  },
  {
    name: 'Zapatillas lifestyle clásicas',
    note: 'Combinan con todo.',
    image: 'https://images.unsplash.com/photo-1716513312004-9a7ebd4a7182?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxaYXBhdGlsbGFzJTIwbGlmZXN0eWxlJTIwY2wlQzMlQTFzaWNhc3xlbnwwfDB8fHwxNzYzNzU0NTgwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Zapatillas lifestyle clásicas',
    links: [{ href: 'https://amazon.com', label: 'Ver en Amazon' }],
  },
]

function USA() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black text-slate-900">Mis Recomendaciones USA</h1>
        <p className="mt-2 text-slate-700">Una colección pensada para elevar tu día a día: skincare que funciona, prendas deportivas que estilizan y zapatillas diseñadas para confort y estilo. Descubrí lo mejor del mercado en Estados Unidos, todo en un solo lugar.</p>
      </div>

      <ProductSection title="Belleza (USA)" items={beautyUSA} />
      <ProductSection title="Fitness / Ropa Deportiva (USA)" items={fitnessUSA} />
      <ProductSection title="Zapatillas (USA)" items={shoesUSA} />
    </div>
  )
}

export default USA
