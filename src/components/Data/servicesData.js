import CharDham from "../../assets/services/CharDham.jpeg";
import Vehicle from "../../assets/services/VehicleBooking.jpeg";
import Tour from "../../assets/services/uttarkashi.jpeg";
import Stay from "../../assets/services/food_stay.jpeg";


const servicesData = [

  {
    title: "Char Dham Yatra Package",
    slug: "char-dham-yatra-package",
    image: CharDham,

    subtitle: "Complete pilgrimage tour covering Kedarnath, Badrinath, Gangotri & Yamunotri",

    content: `Our Char Dham Yatra package from Uttarkashi covers all four sacred destinations – Kedarnath, Badrinath, Gangotri, and Yamunotri. 
    We provide complete travel planning including transport, hotel booking, and local support to ensure a smooth and comfortable journey. 
    This package is ideal for families, senior citizens, and spiritual travelers looking for a safe and well-organized Char Dham Yatra experience.`,

    points: [
      { label: "Destinations", value: "Kedarnath, Badrinath, Gangotri, Yamunotri" },
      { label: "Includes", value: "Transport, Stay, Local Support" },
      { label: "Best Time", value: "May–June, Sept–Oct" },
      { label: "Duration", value: "10–12 Days" },
      { label: "Ideal For", value: "Families & Pilgrimage Travelers" }
    ]
  },

  {
    title: "Vehicle Booking in Uttarkashi",
    slug: "vehicle-booking-uttarkashi",
    image: Vehicle,

    subtitle: "Taxi, SUV & tempo traveller for treks and tours",

    content: `We offer reliable vehicle booking services in Uttarkashi for treks, tours, and Char Dham Yatra. 
    You can book taxis, SUVs, and tempo travellers with experienced drivers who are well familiar with mountain routes. 
    Our service is perfect for trips to Gangotri, Dayara Bugyal, Dodital Trek, and other nearby destinations.`,

    points: [
      { label: "Vehicles", value: "Taxi, SUV, Tempo Traveller" },
      { label: "Service Area", value: "Uttarkashi & nearby regions" },
      { label: "Drivers", value: "Experienced hill drivers" },
      { label: "Best For", value: "Treks, Tours, Char Dham Yatra" },
      { label: "Availability", value: "All year round" }
    ]
  },

  {
    title: "Uttarkashi Tour Packages",
    slug: "uttarkashi-tour-packages",
    image: Tour,

    subtitle: "Explore popular and hidden places in Uttarkashi",

    content: `Our Uttarkashi tour packages are designed to help travelers explore the natural beauty of the Himalayas. 
    From famous destinations like Gangotri and Harsil to hidden valleys and scenic trekking routes, 
    we provide guided travel experiences with complete planning and local support. 
    These packages are ideal for families, couples, and adventure travelers.`,

    points: [
      { label: "Places Covered", value: "Gangotri, Harsil, Dayara Bugyal" },
      { label: "Includes", value: "Travel Planning, Local Support, Guide" },
      { label: "Best Time", value: "March–June, Sept–Dec" },
      { label: "Duration", value: "2–6 Days" },
      { label: "Ideal For", value: "Families & Travelers" }
    ]
  },

  {
    title: "Food & Stay in Uttarkashi",
    slug: "food-stay-uttarkashi",
    image: Stay,

    subtitle: "Comfortable hotels and hygienic food for travelers",

    content: `We provide comfortable accommodation and hygienic food options in Uttarkashi for trekkers and tourists. 
    Whether you are looking for budget hotels or standard stays, we arrange the best options according to your needs. 
    Our food services ensure clean, healthy, and home-style meals during your trip.`,

    points: [
      { label: "Stay Type", value: "Budget & Standard Hotels" },
      { label: "Food", value: "Hygienic & Home-style meals" },
      { label: "Location", value: "Uttarkashi town & nearby" },
      { label: "Best For", value: "Trekkers & Tourists" },
      { label: "Availability", value: "All year round" }
    ]
  }

];

export default servicesData;