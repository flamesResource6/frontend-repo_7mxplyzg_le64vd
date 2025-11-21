import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: 799, features: ['Unlimited chat', '1 live session/week'] },
    { name: 'Standard', price: 1399, features: ['Unlimited chat', '2 live sessions/week', 'Priority support'] },
    { name: 'Premium', price: 2199, features: ['Unlimited chat', '4 live sessions/month', 'Dedicated care manager'] },
  ]
  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8">Affordable weekly plans (INR)</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold">₹{p.price}<span className="text-base font-normal text-white/60">/week</span></div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="/signup" className="inline-block mt-5 px-4 py-2 rounded-lg bg-saffron-500 text-teal-950 font-semibold">Choose plan</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
