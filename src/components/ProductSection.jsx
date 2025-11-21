function ProductSection({ title, items }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">⭐ {title}</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            {item.image && (
              <div className="w-full aspect-[4/3] bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt || item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
              {item.note && <p className="text-sm text-slate-600 mt-1">{item.note}</p>}
              <div className="mt-4 flex flex-wrap gap-3">
                {item.links?.map((link, li) => (
                  <a
                    key={li}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    👉 {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductSection
