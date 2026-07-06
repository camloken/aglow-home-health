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
          <p>&copy; {new Date().getFullYear()} Aglow Home Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
