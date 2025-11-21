import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HowItWorks() {
  const steps = [
    { title: 'Tell us about you', desc: 'Share your age, concerns, language preference, and who you’d like to talk to.' },
    { title: 'Get matched', desc: 'We recommend licensed therapists based on your inputs. You can switch anytime.' },
    { title: 'Start sessions', desc: 'Chat instantly, or schedule a video/phone session that fits your routine.' },
    { title: 'Keep progressing', desc: 'Your therapist tracks goals and shares tools to help you feel better.' },
  ]
  return (
    <div className="min-h-screen bg-teal-950 text-white/90">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6">How it works</h1>
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={s.title} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="text-sm text-white/60 mb-1">Step {i+1}</div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
