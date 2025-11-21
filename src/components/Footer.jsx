export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white/80 border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-3">BetterMann</h4>
          <p className="text-sm">Online therapy tailored for India. Confidential, affordable, and available in your language.</p>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/faqs" className="hover:text-white">FAQs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy & Terms</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Emergency</h5>
          <p className="text-sm">If you are in crisis or may be in danger, don't use this site. Call your local helpline: 112 (India).</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} BetterMann</div>
    </footer>
  )
}
