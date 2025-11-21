import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FAQs() {
  const [faqs, setFaqs] = useState([])

  useEffect(()=>{(async()=>{
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    const res = await fetch(`${baseUrl}/api/faq`)
    const data = await res.json()
    setFaqs(data.items || [])
  })()},[])

  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">FAQs</h1>
        <div className="space-y-3">
          {faqs.map(f => (
            <details key={f.id} className="bg-white/5 ring-1 ring-white/10 rounded-xl p-4">
              <summary className="cursor-pointer text-white font-medium">{f.question}</summary>
              <p className="text-sm mt-2">{f.answer}</p>
            </details>
          ))}
          {faqs.length===0 && <p className="text-white/70">No FAQs yet.</p>}
        </div>
      </main>
      <Footer />
    </div>
  )
}
