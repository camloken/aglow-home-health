import { Link } from "wouter";
import { useState, useRef, useEffect } from "react";
import aglowLogo from '../assets/aglow-logo.svg'
import services from "./servicesData.js"

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <nav className='topbar'>
      <div className='page-inner'>
        <Link href="/" className="logo"><img src={aglowLogo} alt='Aglow Home Health' /></Link>
        <section className='nav-links'>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <div
            className="nav-dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button className="nav-dropdown-trigger" onClick={() => setMenuOpen(!menuOpen)}>
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className={`caret ${menuOpen ? "caret--open" : ""}`}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`nav-dropdown-menu ${menuOpen ? "nav-dropdown-menu--open" : ""}`}>
              {services.map((s) => (
                <Link key={s.slug} href={"/services/" + s.slug} onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Topbar
