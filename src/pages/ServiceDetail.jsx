import { useParams, Redirect } from "wouter"
import { useEffect } from "react"
import Icon from "./icons.jsx"
import physioImg from "../assets/physio.webp"
import physioBg from "../assets/physio-2.webp"
import companionImg from "../assets/companion-care.webp"
import companionBg from "../assets/companion-1.webp"
import specialCareImg from "../assets/img-38.webp"
import specialCareBg from "../assets/img-42.webp"
import nurseInHouseImg from "../assets/img-8.webp"
import nurseBg from "../assets/img-37.webp"
import personalCareImg from "../assets/personal-care.webp"
import personalCareBg from "../assets/img-43.webp"
import respiteImg from "../assets/respite.webp"
import respiteBg from "../assets/hands.webp"

import familyDoctorImg from "../assets/img-21.webp"
import familyDoctorBg from "../assets/doctor-bg.webp"

const services = {
  nursing: {
    title: "Nursing Care",
    tag: "Qualified Practitioners",
    backgroundImg: nurseBg,
    image: nurseInHouseImg,
    description:
       "We provide professional in-home nursing services delivered by licensed Registered Nurses (RNs) and Licensed Practical Nurses (LPNs). Our nursing care supports safe transitions, ongoing health management, and improved client outcomes in the home setting. Care plans are individualized, goal-oriented, and regularly reviewed to ensure quality, safety, and continuity of care.",
    details: [
      { title: "Medication Management", desc: "Safe administration and monitoring of medications to ensure proper dosages and schedules." },
      { title: "Wound Care", desc: "Professional dressing changes and wound assessment to promote healing and prevent infection." },
      { title: "Vital Sign Monitoring", desc: "Regular tracking of blood pressure, heart rate, and other key health indicators." },
      { title: "Chronic Disease Management", desc: "Ongoing support for diabetes, heart disease, and other long-term conditions." },
      { title: "Care Coordination", desc: "Seamless communication with physicians and specialists for integrated care." },
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
      { title: "Bathing & Grooming", desc: "Assistance with safe entry and exit, washing, drying, and hair care." },
      { title: "Dressing & Personal Appearance", desc: "Help choosing clothes, brushing hair, shaving, and oral hygiene." },
      { title: "Mobility Assistance", desc: "Transfers, walking support, positioning, and fall prevention." },
      { title: "Toileting & Incontinence Care", desc: "Discreet and hygienic help maintaining cleanliness." },
      { title: "Feeding & Meal Support", desc: "Gentle assistance with meals, hydration, and special diets." },
      { title: "Companionship", desc: "Friendly presence and emotional support for daily well-being." },
    ],
  },
  physiotherapy: {
    title: "Physiotherapy",
    tag: "Recovery-Focused",
    backgroundImg: physioBg,
    image: physioImg,
    description:
       "Our registered physiotherapists develop personalized recovery programs designed to help clients regain strength, improve mobility, and manage pain in the comfort of their own home. Each plan is tailored to individual goals — whether recovering from surgery, managing a chronic condition, or improving balance and confidence. We work closely with physicians and other care providers to ensure coordinated, effective treatment that supports long-term well-being and independence.",
    details: [
      { title: "Strength & Mobility Assessments", desc: "Comprehensive evaluation to create a targeted recovery plan." },
      { title: "Personalized Exercise Programs", desc: "Custom routines designed to rebuild strength and flexibility." },
      { title: "Balance & Fall Prevention", desc: "Training and strategies to reduce fall risk and improve stability." },
      { title: "Post-Surgery Rehabilitation", desc: "Guided recovery after joint, fracture, or other procedures." },
      { title: "Pain Management Techniques", desc: "Therapeutic exercises and modalities to manage chronic pain." },
      { title: "Assistive Device Training", desc: "Instruction on walkers, canes, and other mobility aids." },
    ],
  },
  companionCare: {
    title: "Companion Care",
    tag: "Caring & Compassionite",
    backgroundImg: companionBg,
    image: companionImg,
    description:
       "Our companion care service provides meaningful social interaction, gentle encouragement, and trusted presence for clients who need support staying connected to the world around them. We focus on companionship that enriches daily life — from shared activities and conversations to accompaniment to appointments and community outings. Compassionate companions bring warmth, engagement, and peace of mind to every visit.",
    details: [
      { title: "Social Interaction", desc: "Engaging conversations, games, and shared hobbies to maintain mental stimulation and social connection." },
      { title: "Activities & Outings", desc: "Gentle walks, community events, and local visits to keep clients active and engaged with their community." },
      { title: "Meal Preparation", desc: "Nutritious meal planning and preparation with the joy of shared dining experiences." },
      { title: "Light Housekeeping", desc: "Maintaining a comfortable, clean living environment that promotes wellbeing and peace of mind." },
      { title: "Personal Assistance", desc: "Support with grooming, dressing, and mobility to maintain dignity and independence." },
      { title: "Emotional Support", desc: "Compassionate encouragement and a listening ear to provide comfort during difficult times." },
    ],
  },
  specializedCare: {
    title: "Specialized Care",
    tag: "Dignity-Centered Care",
    backgroundImg: specialCareBg,
    image: specialCareImg,
    description:
        "Expert support delivered in the comfort of home for clients navigating post-surgery recovery, chronic illness management, dementia and Alzheimer's disease. Our trained care team brings clinical skill alongside genuine compassion, tailoring every visit to the unique needs of each individual.",
    details: [
       { title: "Post-Surgery Recovery Support", desc: "Help with mobility, medication reminders, wound care monitoring, and rehabilitation exercises after surgery." },
        { title: "Chronic Illness Management", desc: "Ongoing support for managing long-term conditions including diabetes, heart disease, and COPD." },
        { title: "Dementia & Alzheimer's Care", desc: "Specialized assistance for cognitive decline with a focus on safety, routine, and meaningful engagement." },
        { title: "Pain Management", desc: "Gentle, personalized therapy to reduce pain and improve mobility, balance, strength, and overall comfort" },
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
      { title: "Maintaining Daily Routines", desc: "Helping clients feel comfortable and secure by maintaining their preferred daily habits and routines." },
      { title: "Companionship & Supervision", desc: "Engaging activities and safety monitoring for your loved one." },
      { title: "Peace of Mind", desc: "Reliable, vetted professionals you can trust in your home." },
    ],
  },
  familyDoctor: {
    title: "Doctor Support",
    tag: "Connected Care",
    backgroundImg: familyDoctorBg,
    image: familyDoctorImg,
    description:
       "We help connect clients to family doctor services — whether that means coordinating transportation to an existing family physician, matching you with one of the physicians affiliated with Aglow, or accessing virtual care from the comfort of home. Our goal is to make primary care more accessible and reduce barriers to regular check-ups, follow-ups, and preventive health.",
    details: [
      { title: "Transportation Coordination", desc: "Arranging safe, dependable transportation to and from your scheduled medical appointments." },
      { title: "Aglow-Affiliated Physicians", desc: "Connecting clients with family doctors who work alongside Aglow’s care team for coordinated support." },
      { title: "Virtual Care Access", desc: "Help setting up and joining virtual appointments with your family doctor from the comfort of home." },
      { title: "Appointment Reminders", desc: "Friendly check-in calls and appointment reminders help ensure you never miss an important visit." },
      { title: "Follow-Up Support", desc: "Assistance with prescription pickups, lab referrals, and post-appointment care coordination." },
      { title: "Health Navigation", desc: "Guidance on understanding referrals, specialist visits, and next steps in your care journey." },
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
     <div className="service-detail-page">
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
