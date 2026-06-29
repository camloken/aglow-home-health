import { Link } from "wouter"
import Icon from "./icons.jsx"
import conversationImg from "../assets/conversation.webp"
import nurseImg from "../assets/nurse.webp"
import physioImg from "../assets/physio.webp"
import physioImg2 from "../assets/physio-2.webp"
import seniorImg from "../assets/personal-care.webp"

import services from "./servicesData.js"

const slideImages = [
  {
    src: nurseImg,
    alt: "Caregiver supporting an older adult at home",
  },
  {
    src: physioImg2,
    alt: "Health care professional working with a client",
  },
  {
    src: seniorImg,
    alt: "Nurse providing compassionate care",
  },
  {
    src: conversationImg,
    alt: "Home health care planning and support",
  },
]


function Home() {
  return (
    <div className="home-page">
      <section className="hero-slideshow" aria-label="Aglow Home Care Solution">
        <div className="hero-slides" aria-hidden="true">
          {slideImages.map((image, index) => (
            <img
              key={image.src}
              className="hero-slide"
              src={image.src}
              alt={image.alt}
              style={{ "--slide-index": index }}
            />
          ))}
        </div>
        <div className="hero-content page-inner">
          <p className="eyebrow">Aglow Home Care</p>
          <h1>Professional Care and Trusted Support, Right at Home</h1>
          <p>
            Compassionate, reliable, and professional home health care designed
            to help clients live safely, comfortably, and independently.
          </p>
          <div className="hero-actions">
          <a className="hero-action" href="/contact">Book a Consultation</a>
          <a className="hero-action hero-action--outline" href="tel:+14033757676">Call: 1-403-375-7676</a>
        </div>
        </div>
      </section>

      <section className="home-intro page-inner">
        <h2>Personalized home care that supports independence.</h2>
        <p>
          "Our mission is to enhance quality of life for every client we serve.
          We support families, informal caregivers, and people who need care,
          rehabilitation, palliative support, or help remaining at home."
        </p>
        <img
           className="service-detail-mid-image"
           src={physioImg}
           alt=""
         />
      </section>

      <section className="services-section" aria-labelledby="services-title">
        <div className="services-section-inner page-inner">
          <div className="section-heading">
            <p className="section-kicker">Our Care Services</p>
            <h2 id="services-title">Comprehensive support in the comfort of home.</h2>
          </div>

          <div className="services-grid">
            {services.map((s) => (
            <Link href={"/services/" + s.slug} className="service-card" key={s.slug} onClick={() => window.scrollTo(0, 0)}>
              <span className="service-icon" aria-hidden="true">
                <Icon name={s.icon} size={32} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="learn-more">Learn More <Icon name="arrowRight" size={14} /></span>
            </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
