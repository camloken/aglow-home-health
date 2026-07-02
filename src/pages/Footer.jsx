import { Link } from "wouter"
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
            <p>Unit 20, 217 Hawksbrow Drive NW</p>
            <p>Calgary, Alberta, T3G 3K2</p>
            <p><a href="tel:+14033757676">1-403-375-7676</a></p>
            <p><a href="mailto:info@aglowhomecare.ca">info@aglowhomecare.ca</a></p>
            <br />
            <h4 className="hours-heading">Business Hours</h4>
            <p className="hours-row">Monday – Friday: 8:00 AM – 6:00 PM</p>
            <p className="hours-row">Saturday: 9:00 AM – 3:00 PM</p>
            <p className="hours-row">Sunday: Closed</p>
          </div>

          {/* Embedded map */}
          <div className="footer-col footer-col--map">
            <h4>Find Us</h4>
            <div className="footer-map">
              <iframe
                title="Aglow Home Health location"
                src="https://maps.google.com/maps?q=Unit%2020%2C%20217%20Hawksbrow%20Drive%20NW%2C%20Calgary%2C%20Alberta%20T3G%203K2&hl=en&z=15&output=embed"
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
