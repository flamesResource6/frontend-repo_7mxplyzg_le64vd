import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Directory() {
  const [list, setList] = useState([])
  const [q, setQ] = useState('')
  const [language, setLanguage] = useState('')
  const [city, setCity] = useState('')

  useEffect(() => { fetchTherapists() }, [])

  const fetchTherapists = async () => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (language) params.set('language', language)
    if (city) params.set('city', city)
    const res = await fetch(`${baseUrl}/api/therapists?${params.toString()}`)
    const data = await res.json()
    setList(data.items || [])
  }

  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">Find a therapist</h1>
        <div className="grid md:grid-cols-4 gap-3 mb-6">
          <input className="bg-white/10 rounded-lg p-2" placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
          <select className="bg-white/10 rounded-lg p-2" value={language} onChange={e=>setLanguage(e.target.value)}>
            <option value="">Any language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
            <option value="Bengali">Bengali</option>
          </select>
          <input className="bg-white/10 rounded-lg p-2" placeholder="City" value={city} onChange={e=>setCity(e.target.value)} />
          <button onClick={fetchTherapists} className="bg-saffron-500 text-teal-950 rounded-lg font-semibold">Search</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {list.map(t => (
            <div key={t.id} className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-5">
              <div className="flex gap-4">
                <img src={t.photo_url || 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=400&auto=format&fit=crop'} alt={t.name} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <div className="text-sm text-white/70">{t.city} • {t.languages?.join(', ')}</div>
                  <div className="text-sm mt-1">Specialties: {t.specialties?.join(', ')}</div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-white font-semibold">₹{t.price_per_week_inr}/week</div>
                <a href="/signup" className="px-3 py-2 rounded-lg bg-saffron-500 text-teal-950 font-semibold">Get matched</a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
