import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Pricing from './pages/Pricing'
import Directory from './pages/Directory'
import Blog from './pages/Blog'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Policy from './pages/Policy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/directory" element={<Directory />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/privacy" element={<Policy />} />
    </Routes>
  )
}

export default App
