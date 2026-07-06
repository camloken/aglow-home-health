import { useState, useEffect } from "react"
import services from "./servicesData.js"
import contactImg from "../assets/contact-img.webp"
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Aglow Home Health"
  }, [])

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    bestTime: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // "sent" | "error" | null

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)

    const serviceLabel = services.find((s) => s.slug === form.service)
    const serviceText = serviceLabel ? serviceLabel.title : form.service

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone || "not provided",
          service: serviceText || "not specified",
          best_time: form.bestTime || "not specified",
          message: form.message,
          to_name: "Aglow Home Health Team",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      .then(
        () => {
          setStatus("sent")
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            service: "",
            bestTime: "",
            message: "",
          })
        },
        (error) => {
          console.error("EmailJS send failed:", error)
          setStatus("error")
        },
      )
      .finally(() => setSubmitting(false))
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <img src={contactImg} alt="Home health care consultation" />
        <div className="contact-hero-text">
          <p className="section-kicker">Aglow Home Health</p>
          <h1>Start the Conversation</h1>
        </div>
      </div>
      <div className="page-inner">
        <div className="contact-layout">
          <div className="contact-intro">
            <h2>Contact Us</h2>
            <p>
              For questions or assistance, please complete the form below. Our team will take the time
              to understand your needs, answer your questions, and help you explore the care options available.
              If appropriate, one of our nurses may arrange an in-home consultation to discuss your situation,
              assess the home environment, and recommend the level of support that best fits your needs or the needs
              of your loved one.
            </p>
            <p>
              We strive to respond to all inquires within two business days. For faster support, 
              please call us at <b>(403)-375-7242</b>. We look forward to speaking with you. 
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>First Name <abbr title="Required">*</abbr></span>
              <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} />
            </label>

            <label>
              <span>Last Name <abbr title="Required">*</abbr></span>
              <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} />
            </label>

            <label>
              <span>Email <abbr title="Required">*</abbr></span>
              <input type="email" name="email" required value={form.email} onChange={handleChange} />
            </label>

            <label>
              <span>Phone</span>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
            </label>

            <label>
              <span>Service</span>
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">-- Select a service --</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Best Time to Call</span>
              <select name="bestTime" value={form.bestTime} onChange={handleChange}>
                <option value="">-- Select a time --</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
              </select>
            </label>

            <label className="span-2">
              <span>Message <abbr title="Required">*</abbr></span>
              <textarea name="message" rows={5} required value={form.message} onChange={handleChange} />
            </label>

            {status === "sent" && (
              <div className="span-2 form-status form-status--success">
                Thanks! Your message has been sent. We'll get back to you within two business days.
              </div>
            )}
            {status === "error" && (
              <div className="span-2 form-status form-status--error">
                Something went wrong. Please try again or call us at (403)-375-7242.
              </div>
            )}

            <div className="span-2">
              <button type="submit" className="contact-submit" disabled={submitting}>
                {submitting ? "Sending..." : "Submit"}
              </button>
            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
