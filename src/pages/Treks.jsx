import React from 'react'
import TreksHero from '../components/Treks/TreksHero'
import Card from '../components/Treks/Card'
import treksData from '../components/Data/treksData'

function Treks() {
  return (
    <>
    <TreksHero />
   {treksData.map((trek, index) => (
  <Card
    key={index}
    title={trek.title}
    subtitle={trek.subtitle}
    image={trek.image}
    content={trek.content}
    points={trek.points}
    slug={trek.slug}
    reverse={index % 2 !== 0}
  />
))}
    </>
  )
}

export default Treks
