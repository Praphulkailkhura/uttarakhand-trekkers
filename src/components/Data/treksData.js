import DayaraImage from "../../assets/treks/dayara.jpg"
import DoditalImage from "../../assets/treks/dodital.jpg"
import JoraiImage from "../../assets/treks/jorai.jpg"
import GomukhImage from "../../assets/treks/gomukh.jpg"
import TungnathImage from "../../assets/treks/tungnath.jpg"


const treksData = [
  {
    title: "Dayara Bugyal Trek",
    subtitle: "A scenic meadow trek in Uttarakhand",
    slug: "dayara-bugyal-trek",
    image: DayaraImage,
    content:`Dayara Bugyal Trek is one of the most beautiful meadow treks in Uttarakhand. 
    It offers breathtaking views of snow-capped Himalayan peaks and vast green landscapes. 
    This trek is perfect for beginners and can be done throughout the year. 
    The trail passes through dense forests, open meadows, and charming villages, 
    making it a perfect getaway for nature lovers and adventure seekers.`,
     points: [
      { label: "Location", value: "Uttarkashi, Uttarakhand" },
      { label: "Altitude", value: "12,000 ft approx" },
      { label: "Difficulty", value: "Easy to Moderate" },
      { label: "Best Time", value: "May–June, Sept–Dec" },
      { label: "Duration", value: "4–5 Days" }
    ]
  },

  {
  title: "Jorai Bugyal Trek",
  subtitle: "Hidden alpine meadow trek in Uttarkashi",
  slug: "jorai-bugyal-trek",
  image: JoraiImage,
  content: `Jorai Bugyal Trek is one of the most unexplored and hidden alpine meadow treks in Uttarakhand, located in the Uttarkashi district. 
  This trek is perfect for travelers looking for a peaceful and offbeat experience away from crowded trekking routes. 
  The trail takes you through dense pine forests, traditional Himalayan villages, and eventually opens up to vast green bugyals (meadows) with stunning panoramic views of snow-covered Himalayan peaks. 
  Jorai Bugyal is ideal for nature lovers, photographers, and beginners who want to experience raw Himalayan beauty without heavy trekking difficulty.`,
  
  points: [
    { label: "Location", value: "Uttarkashi, Uttarakhand" },
    { label: "Altitude", value: "10,500 ft approx" },
    { label: "Difficulty", value: "Easy to Moderate" },
    { label: "Best Time", value: "April–June, Sept–Nov" },
    { label: "Duration", value: "3–4 Days" }
  ]
},

  {
    title: "Dodital Trek",
    subtitle: "A peaceful lake trek in Uttarkashi",
    slug: "dodital-trek",
    image: DoditalImage,
    content: `Dodital Trek is known for its beautiful freshwater lake surrounded by dense forests. 
    Located in Uttarkashi, this trek is ideal for beginners and offers a peaceful escape into nature. 
    The trail is rich in flora and fauna and provides a calm and scenic trekking experience.`,
    points: [
      { label: "Location", value: "Uttarkashi, Uttarakhand" },
      { label: "Altitude", value: "12,000 ft approx" },
      { label: "Difficulty", value: "Easy to Moderate" },
      { label: "Best Time", value: "May–June, Sept–Dec" },
      { label: "Duration", value: "4–5 Days" }
    ]
  },

  {
  title: "Gomukh Tapovan Trek",
  subtitle: "Spiritual glacier trek to the source of Ganga",
  slug: "gomukh-tapovan-trek",
  image: GomukhImage,
  content: `Gomukh Tapovan Trek is one of the most popular high-altitude treks in Uttarakhand, known for its spiritual significance and breathtaking Himalayan landscapes. 
  The trek starts from Gangotri and takes you to Gomukh, the origin of the sacred River Ganga, and further to Tapovan, a beautiful high-altitude meadow. 
  Trekkers get stunning close-up views of Mt. Shivling, Bhagirathi peaks, and the Gangotri glacier. 
  This trek is a perfect blend of adventure and spirituality, making it ideal for experienced trekkers looking for a challenging yet rewarding Himalayan journey.`,
  
  points: [
    { label: "Location", value: "Gangotri, Uttarkashi" },
    { label: "Altitude", value: "14,600 ft approx" },
    { label: "Difficulty", value: "Moderate to Difficult" },
    { label: "Best Time", value: "May–June, Sept–Oct" },
    { label: "Duration", value: "6–8 Days" }
  ]
},

{
  title: "Tungnath Trek",
  subtitle: "Easy trek to the highest Shiva temple in the world",
  slug: "tungnath-trek",
  image: TungnathImage,
  content: `Tungnath Trek is one of the easiest and most scenic treks in Uttarakhand, leading to the highest Shiva temple in the world. 
  Located in the Rudraprayag district, this trek starts from Chopta, also known as the “Mini Switzerland of India.” 
  The trail is well-defined and offers mesmerizing views of Himalayan peaks like Nanda Devi, Chaukhamba, and Kedarnath. 
  The trek is perfect for beginners, families, and spiritual travelers who want a short yet rewarding Himalayan experience. 
  From Tungnath, trekkers can also hike further to Chandrashila summit for a 360-degree panoramic mountain view.`,
  
  points: [
    { label: "Location", value: "Chopta, Uttarakhand" },
    { label: "Altitude", value: "12,073 ft approx" },
    { label: "Difficulty", value: "Easy" },
    { label: "Best Time", value: "March–June, Sept–Dec" },
    { label: "Duration", value: "1–2 Days" }
  ]
}
];

export default treksData;