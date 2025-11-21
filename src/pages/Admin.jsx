import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function LinkInput({ value, onChange, onRemove }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Etiqueta (ej: Ver en Amazon)"
        className="flex-1 px-3 py-2 border rounded-md"
        value={value.label}
        onChange={(e) => onChange({ ...value, label: e.target.value })}
      />
      <input
        type="url"
        placeholder="URL con tu tag de afiliada"
        className="flex-[2] px-3 py-2 border rounded-md"
        value={value.href}
        onChange={(e) => onChange({ ...value, href: e.target.value })}
      />
      <button type="button" onClick={onRemove} className="px-3 py-2 text-red-600 hover:underline">Eliminar</button>
    </div>
  )
}

export default function Admin() {
  const [file, setFile] = useState(null)
  const [imagePath, setImagePath] = useState('')
  const [market, setMarket] = useState('usa')
  const [category, setCategory] = useState('beauty')
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const [alt, setAlt] = useState('')
  const [links, setLinks] = useState([{ label: 'Ver en Amazon', href: '' }])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [items, setItems] = useState([])

  const backendOk = useMemo(() => Boolean(API_BASE), [])

  async function uploadImage() {
    if (!file) return
    const form = new FormData()
    form.append('file', file)
    const res = await fetch(`${API_BASE}/api/upload-image`, { method: 'POST', body: form })
    if (!res.ok) throw new Error('Error al subir la imagen')
    const data = await res.json()
    setImagePath(`${API_BASE}${data.path}`)
    return data
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setMessage('')
    try {
      if (file && !imagePath) {
        await uploadImage()
      }
      const payload = { market, category, name, note, image: imagePath || undefined, alt, links }
      const res = await fetch(`${API_BASE}/api/recommendations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('No se pudo guardar')
      setMessage('Guardado con éxito ✅')
      // reset some fields for rapidez
      setName('')
      setNote('')
      setAlt('')
      setLinks([{ label: 'Ver en Amazon', href: '' }])
      setFile(null)
      // refresh list
      fetchItems()
    } catch (err) {
      setMessage(err.message || 'Ocurrió un error')
    } finally {
      setSaving(false)
    }
  }

  async function fetchItems() {
    const res = await fetch(`${API_BASE}/api/recommendations?market=${market}`)
    if (res.ok) {
      const data = await res.json()
      setItems(data.items || [])
    }
  }

  useEffect(() => {
    fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [market])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black text-slate-900 mb-6">Editar contenidos</h1>
        {!backendOk && (
          <div className="p-4 mb-6 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-900">
            Configurá la URL del backend en la variable VITE_BACKEND_URL para poder guardar cambios.
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-5 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Mercado</label>
              <select value={market} onChange={(e) => setMarket(e.target.value)} className="mt-1 w-full border rounded-md px-3 py-2">
                <option value="usa">USA</option>
                <option value="ar">Argentina</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Categoría</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full border rounded-md px-3 py-2">
                <option value="beauty">Belleza</option>
                <option value="fitness">Fitness / Ropa</option>
                <option value="shoes">Zapatillas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Imagen</label>
              <input type="file" accept="image/*" onChange={(e) => { setFile(e.target.files?.[0] || null); setImagePath('') }} className="mt-1 w-full" />
              {imagePath && (
                <p className="text-xs text-slate-600 mt-1">Cargada: {imagePath}</p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nombre</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Título del producto" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">ALT (accesibilidad)</label>
              <input value={alt} onChange={(e) => setAlt(e.target.value)} className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Texto alternativo de la imagen" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Nota</label>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} className="mt-1 w-full border rounded-md px-3 py-2" rows={3} placeholder="Breve comentario" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">Links de afiliada</label>
              <button type="button" className="text-blue-600 text-sm hover:underline" onClick={() => setLinks([...links, { label: '', href: '' }])}>Agregar link</button>
            </div>
            {links.map((lk, idx) => (
              <LinkInput
                key={idx}
                value={lk}
                onChange={(v) => setLinks(links.map((x, i) => (i === idx ? v : x)))}
                onRemove={() => setLinks(links.filter((_, i) => i !== idx))}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button disabled={saving} className="px-4 py-2 bg-slate-900 text-white rounded-md disabled:opacity-60">
              {saving ? 'Guardando…' : 'Guardar'}
            </button>
            {message && <span className="text-sm text-slate-700">{message}</span>}
          </div>
        </form>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Vista previa ({market.toUpperCase()})</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <div key={it.id} className="rounded-xl border bg-white shadow-sm overflow-hidden">
                {it.image && (
                  <div className="w-full aspect-[4/3] bg-slate-100">
                    <img src={it.image} alt={it.alt || it.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{it.category}</p>
                  <h3 className="text-base font-semibold text-slate-900">{it.name}</h3>
                  {it.note && <p className="text-sm text-slate-600 mt-1">{it.note}</p>}
                  <div className="mt-3 flex flex-wrap gap-3">
                    {(it.links || []).map((lk, i) => (
                      <a key={i} href={lk.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">👉 {lk.label}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
