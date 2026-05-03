import Hero from '../components/Home/Hero'
import NelongPermit from '../components/Home/NelongPermit'
import Treks from '../components/Home/Treks'
import Services from '../components/Home/Services'
import Massage from '../components/Home/Massage'
import Gallery from '../components/Home/Gallery'
import Contact from '../components/Home/Contact'
import WhyChoose from '../components/Home/WhyChoose'



const Home = () => {
  return (
   <>
   <Hero />
   <NelongPermit />
   <Treks />
   <Services />
   <WhyChoose title="Why Choose Us for Nelong Valley Permit" />
   <Massage />
   <Gallery />
   <Contact />
   </>
  )
}

export default Home
