import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Policy() {
  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-4">
        <h1 className="text-3xl font-bold">Privacy Policy & Terms</h1>
        <p className="text-sm text-white/70">This is a placeholder summary. Replace with your legal counsel–approved documents. We value privacy and comply with applicable Indian laws.</p>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>We collect minimal data to provide services.</li>
          <li>We never sell your data.</li>
          <li>You can request deletion anytime.</li>
          <li>All payments are processed securely via trusted gateways.</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
