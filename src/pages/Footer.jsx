// Unit 170, 198 Nolanridge Cresent, Calgary, Alberta, T3R 1W9

import { Link } from "wouter"
import { getEmail } from "../email.js"
import services from "./servicesData.js"

function Footer() {
  return (
    <footer className="footer">
      <div className="page-inner">
        <div className="footer-grid">
          {/* Nav links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            <Link href="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
            {services.map((s) => (
              <Link key={s.slug} href={"/services/" + s.slug} onClick={() => window.scrollTo(0, 0)}>{s.title}</Link>
            ))}
          </div>

          {/* Contact info */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p>Aglow Home Health</p>
            <p>Unit 170, 190 Nolanridge Cr. NW</p>
            <p>Calgary, Alberta, T3R 1W9</p>
            <p><a href="tel:+14033757242">1-403-375-7242</a></p>
            <p><a href={"mailto:" + getEmail()}>{getEmail()}</a></p>
            <br />
            <h4 className="hours-heading">Business Hours</h4>
            <p className="hours-row">Monday – Friday: 24 Hours</p>
            <p className="hours-row">Saturday-Sunday: 24 Hours</p>
          </div>

          {/* Embedded map */}
          <div className="footer-col footer-col--map">
            <h4>Find Us</h4>
            <div className="footer-map">
              <iframe
                title="Aglow Home Health location"
                src="https://maps.google.com/maps?q=Unit%20170%2C%20198%20Nolanridge%20Cresent%20NW%2C%20Calgary%2C%20Alberta%20T3R%201W9&hl=en&z=15&output=embed"
                width="100%"
                
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

       <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61591657031351" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/aglowhomehealth" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="white"/>
                </svg>
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Aglow Home Health. All rights reserved.</p>
          </div>
       </div>
      </div>
    </footer>
  )
}

export default Footer
