import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-6">
        <h1 className="text-3xl font-bold">About BetterMann</h1>
        <p className="text-white/80">We are an India-first mental wellness platform with a simple mission: make quality therapy accessible, stigma-free, and culturally relevant. Our network includes licensed psychologists and counsellors across India who speak your language and understand your world.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <h3 className="text-white font-semibold">India-first</h3>
            <p className="text-sm mt-1">Built for diverse languages, cities, and contexts—from students to seniors.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <h3 className="text-white font-semibold">Private & confidential</h3>
            <p className="text-sm mt-1">Your conversations are secure. Switch therapists any time.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
            <h3 className="text-white font-semibold">Affordable pricing</h3>
            <p className="text-sm mt-1">Weekly plans in INR with UPI, debit card, and wallet options.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
