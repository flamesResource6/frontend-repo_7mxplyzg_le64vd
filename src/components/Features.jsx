export default function Features() {
  const features = [
    { title: 'Private & secure', desc: 'Encrypted chat, optional video sessions, and your data stays confidential.' },
    { title: 'Culturally sensitive', desc: 'Therapists who understand Indian contexts across cities and languages.' },
    { title: 'Flexible plans', desc: 'Weekly subscriptions in INR with UPI, card, and wallet support.' },
    { title: 'Therapist matching', desc: 'We match by language, concerns, age group, and preferences.' },
  ]
  return (
    <section className="bg-teal-950 text-white/90 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
