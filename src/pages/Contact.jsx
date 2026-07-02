import { useState } from "react"
import services from "./servicesData.js"
import dialogImg from "../assets/dialog.webp"

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    bestTime: "",
    message: "",
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: send form data
    console.log("Form submitted", form)
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <img src={dialogImg} alt="Home health care consultation" />
        <div className="contact-hero-text">
          <p className="section-kicker">Aglow Home Care</p>
          <h1>Start the Coversation</h1>
        </div>
      </div>
      <div className="page-inner">
        <div className="contact-layout">
          <div className="contact-intro">
            <h2>Contact Us</h2>
            <p>
              For questions or assistance, please complete the form below. Our dedicated team is here to understand your
              unique needs and help you explore the care options available. If appropriate, one of our nurses can arrange
              an in-home consultation to discuss your situation, assess your home environment, and recommend the level of
              support that best meets your needs or those of your loved one.
            </p>
            <p>
              We strive to respond to all inquiries within two business days. For immediate assistance,
              please call us at <b>1-403-375-7676</b>. Let's start the conversation. We look forward to speaking with you.
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
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Best Time to Call</span>
              <select name="bestTime" value={form.bestTime} onChange={handleChange}>
                <option value="">Select a time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
              </select>
            </label>

            <label className="span-2">
              <span>Message <abbr title="Required">*</abbr></span>
              <textarea name="message" rows={5} required value={form.message} onChange={handleChange} />
            </label>
            <div className="span-2">
              <button type="submit" className="contact-submit">Submit</button>
            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
