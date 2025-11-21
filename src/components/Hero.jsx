export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-900 via-emerald-900 to-indigo-900" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(1200px_600px_at_10%_-10%,#34d399,transparent),radial-gradient(800px_400px_at_90%_10%,#a78bfa,transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/10 text-white/90 ring-1 ring-white/20 mb-4">
              India-first online therapy • English • हिन्दी • தமிழ் • বাংলা
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Feel lighter. Talk to a trusted therapist online.
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Confidential support that fits into your day. No judgment. No long wait times. Affordable weekly plans in INR.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/signup" className="px-5 py-3 rounded-lg font-semibold bg-saffron-500 hover:bg-saffron-600 text-teal-950">Get matched</a>
              <a href="/how-it-works" className="px-5 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 text-white">How it works</a>
            </div>
            <div className="mt-6 text-white/70 text-sm">
              UPI • Debit cards • Wallets supported
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop" alt="Indian therapist speaking to a client online" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
