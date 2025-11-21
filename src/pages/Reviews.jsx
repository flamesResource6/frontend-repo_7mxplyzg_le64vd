import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  useEffect(()=>{(async()=>{
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    const res = await fetch(`${baseUrl}/api/reviews`)
    const data = await res.json()
    setReviews(data.items || [])
  })()},[])

  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-4">
        <h1 className="text-3xl font-bold mb-2">Success stories</h1>
        {reviews.map(r => (
          <div key={r.id} className="p-5 rounded-xl bg-white/5 ring-1 ring-white/10">
            <div className="font-semibold text-white">{r.user_name} • {r.city || 'India'}</div>
            <div className="text-yellow-400">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
            <p className="text-sm mt-1">{r.comment}</p>
          </div>
        ))}
        {reviews.length===0 && <p className="text-white/70">No reviews yet.</p>}
      </main>
      <Footer />
    </div>
  )
}
