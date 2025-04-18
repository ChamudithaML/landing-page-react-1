import { motion } from 'framer-motion';
import CardItem from "../CardItem";

const speakers = [
  {
    image: 'src/assets/people/1s.png',
    name: 'Mr. Mohamed Elazzazy',
    description: 'Head of IT Governance and Change Management, Al-Baraka Bank Egypt',
  },
  {
    image: 'src/assets/people/2s.jpg',
    name: 'Mr. Shehab Moustafa',
    description: 'Country Center of Excellence Director, Money Fellows',
  },
  {
    image: 'src/assets/people/3s.jpg',
    name: 'Mr. Marwan Abouzeid',
    description: 'Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra',
  },
  {
    image: 'src/assets/people/4s.jpg',
    name: 'Mr. Karim El Mourabet',
    description: 'Solution Consulting Director - MEA, Finastra',
  },
  {
    image: 'src/assets/people/5s.jpg',
    name: 'Ms. Siobhan Byron',
    description: 'Executive Vice President, Universal Banking, Finastra',
  },
  {
    image: 'src/assets/people/6s.jpg',
    name: 'Mr. Narendra Mistry',
    description: 'Chief Product and Technology Officer Universal Banking, Finastra',
  },
  {
    image: 'src/assets/people/7s.png',
    name: 'Mr. Ahmed Hamdy Bahey El Din',
    description: 'Head of Information Technology, Incolease',
  },
  {
    image: 'src/assets/people/8s.png',
    name: 'Mr. Emad Shawky Habib Hanna',
    description: 'Chief Data and Analytics Officer, Banque Misr',
  },
  {
    image: 'src/assets/people/9s.jpg',
    name: 'Ms. Heba Yehia',
    description: 'Head of Digital Products, Arab African International Bank',
  },
  {
    image: 'src/assets/people/10s.jpg',
    name: 'Mr. Hamid Nirouzad',
    description: 'Managing Director - Africa, Finastra Universal',
  },
  {
    image: 'src/assets/people/11s.jpg',
    name: 'Mr. Rudy Kawmi',
    description: 'Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking',
  },
  {
    image: 'src/assets/people/12s.jpg',
    name: 'Mr. Matthew Hughes',
    description: 'Head of FS&I, International Markets, Atos',
  },
  {
    image: 'src/assets/people/13s.jpg',
    name: "Mr. Daragh O'Byrne",
    description: 'Senior Director, Marketing, Universal Banking, Finastra',
  },
  {
    image: 'src/assets/people/14s.jpg',
    name: 'Dr. Ismail Ali',
    description: 'Co-Founder and CEO of CARITech',
  },
  {
    image: 'src/assets/people/15s.png',
    name: 'Ms. Riham Muhammad',
    description: 'Corporate CEX Senior Analyst, FABMISR',
  },
];

function SectionFour() {
  return (
    <section className="w-full bg-gradient-to-r from-black to-gray-900 py-16 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl text-gray-100 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Speakers
      </motion.h2>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.33rem)] lg:w-[calc(25%-1.5rem)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CardItem
              image={speaker.image}
              title={speaker.name}
              description={speaker.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SectionFour;
