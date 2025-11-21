import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', language: 'en' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${baseUrl}/api/auth/signup`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Signup failed')
      setMessage('Signup successful. You can now login.')
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">Create your account</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <input className="w-full bg-white/10 rounded-lg p-3" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input className="w-full bg-white/10 rounded-lg p-3" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <input className="w-full bg-white/10 rounded-lg p-3" placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
          <select className="w-full bg-white/10 rounded-lg p-3" value={form.language} onChange={e=>setForm({...form,language:e.target.value})}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
            <option value="bn">বাংলা</option>
          </select>
          <button disabled={loading} className="bg-saffron-500 hover:bg-saffron-600 text-teal-950 font-semibold px-4 py-3 rounded-lg">{loading? 'Creating...' : 'Create account'}</button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </main>
      <Footer />
    </div>
  )
}
