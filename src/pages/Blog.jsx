import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => { (async () => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    const res = await fetch(`${baseUrl}/api/blog`)
    const data = await res.json()
    setPosts(data.items || [])
  })() }, [])

  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">Mental wellness resources</h1>
        <div className="space-y-4">
          {posts.map(p => (
            <a key={p.id} href={`/blog/${p.slug}`} className="block p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-sm mt-1">{p.excerpt}</p>
            </a>
          ))}
          {posts.length === 0 && (
            <div className="text-white/70">No posts yet. Check back soon.</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
