import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-50 via-rose-50 to-sky-50" />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Mis Recomendados de Belleza, Fitness y Zapatillas
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg">
            Productos que realmente uso, amo y recomiendo. Encontrá opciones para Argentina y Estados Unidos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/usa" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-slate-900 text-white hover:bg-slate-800 transition">
              <span>🇺🇸 Ver productos USA</span>
            </Link>
            <Link to="/ar" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition">
              <span>🇦🇷 Ver productos Argentina</span>
            </Link>
            <Link to="/blog" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-amber-500 text-white hover:bg-amber-600 transition">
              <span>📝 Blog / Tips</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
