import { Route } from "wouter";
import Topbar from './pages/Topbar.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Footer from './pages/Footer.jsx'

import './App.css'

function App() {
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
      <Footer />
    </div>
  )
}

export default App
