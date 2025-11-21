import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Login failed')
      setMessage(`Welcome back, ${data.name}`)
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">Log in</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <input className="w-full bg-white/10 rounded-lg p-3" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <input className="w-full bg-white/10 rounded-lg p-3" placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
          <button className="bg-saffron-500 hover:bg-saffron-600 text-teal-950 font-semibold px-4 py-3 rounded-lg">Log in</button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </main>
      <Footer />
    </div>
  )
}
