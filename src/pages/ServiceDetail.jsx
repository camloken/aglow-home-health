import { useParams, Redirect } from "wouter"
import { useEffect } from "react"
import Icon from "./icons.jsx"
import physioImg from "../assets/physio-img.webp"
import physioBg from "../assets/physio-bg.webp"
import companionImg from "../assets/companion-img.webp"
import companionBg from "../assets/companion-bg.webp"
import specialCareImg from "../assets/special-care-img.webp"
import specialCareBg from "../assets/special-care-bg.webp"
import nurseInHouseImg from "../assets/nurse-in-house-img.webp"
import nurseBg from "../assets/nurse-bg.webp"
import personalCareImg from "../assets/personal-care-img.webp"
import personalCareBg from "../assets/personal-care-bg.webp"
import respiteImg from "../assets/respite-img.webp"
import respiteBg from "../assets/respite-bg.webp"

import familyDoctorImg from "../assets/family-doctor-img.webp"
import familyDoctorBg from "../assets/family-doctor-bg.webp"

const services = {
  nursing: {
    title: "Nursing Care",
    tag: "Licensed Care You Can Trust",
    backgroundImg: nurseBg,
    image: nurseInHouseImg,
    description:
       "We provide professional in-home nursing support delivered by licensed Registered Nurses (RNs) and Licensed Practical Nurses (LPNs). Our nursing care is designed to support client safety, comfort, and continuity of care at home through individualized care planning and regular review.",
    details: [
      { title: "Medication Management", desc: "Safe medication administration, monitoring, and support provided by licensed nursing staff within their scope of practice." },
      { title: "Wound Care", desc: "Wound assessment, dressing changes, and monitoring to support healing and reduce infection risk." },
      { title: "Vital Sign Monitoring", desc: "Regular tracking of blood pressure, heart rate, and other key health indicators." },
      { title: "Chronic Condition Management", desc: "Nursing support for clients living with diabetes, heart disease, and other ongoing health conditions. " },
      { title: "Care Coordination", desc: "Communication with families, physicians, specialists, and care teams to support coordinated care." },
      { title: "Patient & Family Education", desc: "Guidance on medications, treatments, and home care best practices." },
    ],
  },
  personalCare: {
    title: "Personal Care",
    tag: "Respect & Dignity",
    backgroundImg: personalCareBg,
    image: personalCareImg,
    description:
       "Our personal care and daily living service is designed to help clients maintain comfort, cleanliness, and confidence while staying in the familiarity of their own homes. Our skilled and compassionate caregivers provide gentle, respectful support with everyday routines, including bathing, dressing, grooming, mobility assistance, and more. Every task is carried out with a focus on safety, dignity, and independence, ensuring clients feel valued and empowered throughout their day.",
    details: [
      { title: "Bathing & Grooming", desc: "Assistance with bathing, showering, washing, drying, grooming, and hair care." },
      { title: "Dressing & Personal Appearance", desc: "Support with choosing clothing, dressing, brushing hair, shaving, and oral hygiene." },
      { title: "Mobility Assistance", desc: "Transfers, walking support, positioning, and fall prevention." },
      { title: "Toileting & Incontinence Care", desc: "Discreet, respectful support with toileting, incontinence care, and hygiene." },
      { title: "Feeding & Meal Support", desc: "Gentle assistance with meals, hydration, feeding support, and diet preferences." },
      { title: "Companionship", desc: "Friendly presence and emotional support for daily well-being." },
    ],
  },
  physiotherapy: {
    title: "Physiotherapy",
    tag: "Recovery-Focused",
    backgroundImg: physioBg,
    image: physioImg,
    description:
       "Our registered physiotherapists provide in-home physiotherapy to help clients improve mobility, strength, balance, comfort, and confidence in the familiarity of home. Each plan is tailored to the client’s goals and needs, whether they are recovering from surgery, managing a chronic condition, or working toward greater independence.",
    details: [
      { title: "Strength & Mobility Assessments", desc: "Comprehensive assessments to understand mobility, strength, safety needs, and recovery goals." },
      { title: "Personalized Exercise Programs", desc: "Customized exercises designed to support strength, flexibility, movement, and confidence. " },
      { title: "Balance & Fall Prevention", desc: "Training and strategies to improve stability, reduce fall risk, and support safer movement at home" },
      { title: "Post-Surgery Rehabilitation", desc: "Guided rehabilitation support after joint replacement, fractures, surgery, or other procedures." },
      { title: "Pain Management Support", desc: "Therapeutic exercises, movement strategies, and education to help manage pain and improve comfort" },
      { title: "Assistive Device Training", desc: "Guidance on safe use of walkers, canes, and other mobility aids." },
    ],
  },
  companionCare: {
    title: "Companion Care",
    tag: "Caring & Compassionate",
    backgroundImg: companionBg,
    image: companionImg,
    description:
       "Our Companion care services provide meaningful social interaction, gentle encouragement, and trusted presence for clients who may need extra support staying connected. From conversation and shared activities to appointment accompaniment and community outings, Aglow Home Health companions help bring warmth, engagement, and peace of mind to each visit. ",
    details: [
      { title: "Social Interaction", desc: "Engaging conversations, games, and shared hobbies to maintain mental stimulation and social connection." },
      { title: "Activities & Outings", desc: "Gentle walks, community events, and local visits to keep clients active and engaged with their community." },
      { title: "Meal Companionship", desc: "Support with simple meals, hydration reminders, and shared dining experiences." },
      { title: "Light Homemaking", desc: "Client-related tidying, light housekeeping, and support maintaining a comfortable home environment." },
      { title: "Daily Living Support", desc: "Gentle support with routines such as grooming, dressing reminders, mobility encouragement, and staying on schedule." },
      { title: "Emotional Support", desc: "A compassionate presence, encouragement, and a listening ear to help clients feel supported throughout the day and during difficult times." },
    ],
  },
  specializedCare: {
    title: "Specialized Care",
    tag: "Dignity-Centered Care",
    backgroundImg: specialCareBg,
    image: specialCareImg,
    description:
        "Aglow Home Health provides specialized in-home support for clients living with dementia, Alzheimer’s disease, chronic conditions, palliative needs, or recovering from surgery. Our trained care team tailors support to each client’s routines, safety needs, comfort level, and care plan, helping families feel supported while clients receive compassionate care at home.",
    details: [
       { title: "Post-Surgery Recovery Support", desc: "Help with mobility, medication reminders, wound monitoring, rehabilitation routines, and daily support after surgery. " },
        { title: "Chronic Illness Management", desc: "Ongoing support for clients living with long-term conditions such as diabetes, heart disease, COPD, or other health concerns." },
        { title: "Dementia & Alzheimer's Care", desc: "Specialized support for memory loss and cognitive changes, with a focus on safety, routine, reassurance, and meaningful engagement." },
        { title: "Pain Management", desc: "Support with comfort, mobility, and daily routines for clients living with pain." },
      ],
  },
  respite: {
    title: "Respite Services",
    tag: "Relief for Caregivers",
    backgroundImg: respiteBg,
    image: respiteImg,
    description:
       "Our respite care services provide temporary relief for family caregivers, allowing them time to rest, attend to personal matters, or simply recharge. Whether you need support for a few hours or several days, our professionally trained caregivers provide compassionate, reliable care tailored to your loved one’s unique needs. Each client receives a personalized care plan that promotes physical, cognitive, and emotional well-being, giving families peace of mind while taking a well-deserved break.",
    details: [
      { title: "Short & Long Term Coverage", desc: "Flexible respite care available for a few hours, overnight stays, or multiple days." },
      { title: "Maintaining Daily Routines", desc: "Support with familiar routines, meals, activities, and daily care needs." },
      { title: "Companionship & Supervision", desc: "Engaging activities, friendly companionship, and attentive support while family caregivers take a break." },
      { title: "Peace of Mind", desc: "Reliable, screened care professionals families can trust in the home." },
    ],
  },
  familyDoctor: {
    title: "Family Doctor Support",
    tag: "Connected Care",
    backgroundImg: familyDoctorBg,
    image: familyDoctorImg,
    description:
       "We help connect clients with family doctor services to ensure they have access to ongoing primary healthcare. Our goal is to make primary care more accessible and support clients in establishing and maintaining a long-term relationship with a family physician for continuity of care and better overall health.",
    details: [
      { title: "Transportation Coordination", desc: "Arranging safe, dependable transportation to and from your scheduled medical appointments." },
      { title: "Aglow-Affiliated Physicians", desc: "Connecting clients with family doctors who work alongside Aglow’s care team for coordinated support." },
      { title: "Virtual Care Access", desc: "Help setting up and joining virtual appointments with your family doctor from the comfort of home." },
      { title: "Appointment Reminders", desc: "Friendly check-in calls and appointment reminders help ensure you never miss an important visit." },
      { title: "Follow-Up Support", desc: "Assistance with prescription pickups, lab referrals, and post-appointment care coordination." },
      { title: "Health Navigation", desc: "Support understanding referrals, specialist appointments, and the next steps in your care journey." },
    ],
  },
}

function ServiceDetail() {
  const { slug } = useParams()
  const service = services[slug]

  useEffect(() => {
    document.title = service.title + " | Aglow Home Health"
  }, [service])

  if (!service) {
    return <Redirect to="/" />
  }

  return (
     <div className="service-detail-page" key={slug}>
       <div className="service-detail-hero">
         <img src={service.backgroundImg} alt={service.title} />
         <div className="service-detail-hero-text">
           <span className="eyebrow">Aglow Home Health</span>
           <h1>{service.tag}</h1>
           {service.heroTagline && (
             <p className="hero-card-desc">{service.heroTagline}</p>
           )}
         </div>
       </div>
       <div className="service-detail-inner page-inner">
         <h1>{service.title}</h1>
         <div className="service-detail-intro">
           <p className="service-detail-description">{service.description}</p>
         </div>
         <img
           className="service-detail-mid-image"
           src={service.image}
           alt={service.title + " care in the comfort of home"}
         />
         <h2 className="service-detail-subtitle">Services Include</h2>

         <div className="service-detail-cards">
           {service.details.map((item) => (
             <div key={item.title} className="detail-card">
               <span className="detail-card-icon">
                 <Icon name="checkmark" size={20} />
               </span>
               <div>
                 <h3>{item.title}</h3>
                 <p>{item.desc}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
   )
}

export default ServiceDetail
