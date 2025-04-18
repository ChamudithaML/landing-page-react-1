import CardItem from "../CardItem";

const speakers = [
    {
      image: 'src/assets/people/1s.png',
      name: 'Mr. Mohamed Elazzazy',
      description: 'Head of IT Governance and Change Management, Al-Baraka Bank Egypt',
    },
    {
      image: 'src/assets/people/1s.png',
      name: 'Mr. Shehab Moustafa',
      description: 'Country Center of Excellence Director, Money Fellows',
    },
    {
      image: 'src/assets/people/1s.png',
      name: 'Mr. Marwan Abouzeid',
      description: 'Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra',
    },
    {
      image: 'src/assets/people/1s.png',
      name: 'Mr. Karim El Mourabet',
      description: 'Solution Consulting Director - MEA, Finastra',
    },
    {
      image: 'path',
      name: 'Ms. Siobhan Byron',
      description: 'Executive Vice President, Universal Banking, Finastra',
    },
    {
      image: 'path',
      name: 'Mr. Narendra Mistry',
      description: 'Chief Product and Technology Officer Universal Banking, Finastra',
    },
    {
      image: 'path',
      name: 'Mr. Ahmed Hamdy Bahey El Din',
      description: 'Head of Information Technology, Incolease',
    },
    {
      image: 'path',
      name: 'Mr. Emad Shawky Habib Hanna',
      description: 'Chief Data and Analytics Officer, Banque Misr',
    },
    {
      image: 'path',
      name: 'Ms. Heba Yehia',
      description: 'Head of Digital Products, Arab African International Bank',
    },
    {
      image: 'path',
      name: 'Mr. Hamid Nirouzad',
      description: 'Managing Director - Africa, Finastra Universal',
    },
    {
      image: 'path',
      name: 'Mr. Rudy Kawmi',
      description: 'Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking',
    },
    {
      image: 'path',
      name: 'Mr. Matthew Hughes',
      description: 'Head of FS&I, International Markets, Atos',
    },
    {
      image: 'path',
      name: "Mr. Daragh O'Byrne",
      description: 'Senior Director, Marketing, Universal Banking, Finastra',
    },
    {
      image: 'path',
      name: 'Dr. Ismail Ali',
      description: 'Co-Founder and CEO of CARITech',
    },
    {
      image: 'path',
      name: 'Ms. Riham Muhammad',
      description: 'Corporate CEX Senior Analyst, FABMISR',
    },
  ];  
  

  function SectionFour() {
    return (
      <section className="w-full bg-gradient-to-r from-black to-gray-900 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl text-gray-100 mb-12">Our Speakers</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <CardItem
              key={index}
              image={speaker.image}
              title={speaker.name}
              description={speaker.description}
            />
          ))}
        </div>
      </section>
    );
  }
  
  export default SectionFour;