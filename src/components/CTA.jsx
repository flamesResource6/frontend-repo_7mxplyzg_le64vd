export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-lavender-200/40 to-teal-200/40 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-950">Start your wellness journey today</h2>
        <p className="text-teal-800/80 mt-2">Answer a few questions and we’ll recommend the right therapist for you.</p>
        <div className="mt-5">
          <a href="/signup" className="inline-flex items-center px-6 py-3 rounded-xl bg-teal-700 text-white hover:bg-teal-800 font-semibold">Begin questionnaire</a>
        </div>
      </div>
    </section>
  )
}
