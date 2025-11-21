import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${baseUrl}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Error')
      setStatus('Message received. Our care team will reply soon.')
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">24x7 Support</h1>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full bg-white/10 rounded-lg p-3" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input className="w-full bg-white/10 rounded-lg p-3" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <input className="w-full bg-white/10 rounded-lg p-3" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
          <textarea className="w-full bg-white/10 rounded-lg p-3" rows="5" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
          <button className="bg-saffron-500 hover:bg-saffron-600 text-teal-950 font-semibold px-4 py-3 rounded-lg">Send</button>
        </form>
        {status && <p className="mt-3 text-sm">{status}</p>}
      </main>
      <Footer />
    </div>
  )
}
