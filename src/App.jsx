import { Route, useRoute } from "wouter";
import Topbar from './pages/Topbar.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import CtaBanner from './pages/CtaBanner.jsx'
import Footer from './pages/Footer.jsx'

import './App.css'

function App() {
  const [isContact] = useRoute("/contact")
  return (
    <div className="app">
      {/* Navigation menu */}
      <Topbar />

      {/* Page Content / Router */}
      <main className="page-content">
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/services/:slug" component={ServiceDetail} />
      </main>
      {!isContact && <CtaBanner />}
      <Footer />
    </div>
  )
}

export default App
