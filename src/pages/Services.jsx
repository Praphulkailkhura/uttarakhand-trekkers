import React from 'react'
import ServiceHero from '../components/Services/ServiceHero'
import ServiceCard from '../components/Services/ServiceCard'
import servicesData from '../components/Data/servicesData'

function Services() {
  return (
    <>
    <ServiceHero />
    {servicesData.map((service, index) => (
  <ServiceCard
    key={index}
    {...service}
    reverse={index % 2 !== 0}
  />
))}
    </>
  )
}

export default Services
