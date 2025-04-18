import { motion } from 'framer-motion';
import CardItem from "../CardItem";

import person1 from '../../assets/people/1s.png'
import person2 from '../../assets/people/2s.jpg'
import person3 from '../../assets/people/3s.jpg'
import person4 from '../../assets/people/4s.jpg'
import person5 from '../../assets/people/5s.jpg'
import person6 from '../../assets/people/6s.jpg'
import person7 from '../../assets/people/7s.png'
import person8 from '../../assets/people/8s.png'
import person9 from '../../assets/people/9s.jpg'
import person10 from '../../assets/people/10s.jpg'
import person11 from '../../assets/people/11s.jpg'
import person12 from '../../assets/people/12s.jpg'
import person13 from '../../assets/people/13s.jpg'
import person14 from '../../assets/people/14s.jpg'
import person15 from '../../assets/people/15s.png'

const speakers = [
  {
    image: person1,
    name: 'Mr. Mohamed Elazzazy',
    description: 'Head of IT Governance and Change Management, Al-Baraka Bank Egypt',
  },
  {
    image: person2,
    name: 'Mr. Shehab Moustafa',
    description: 'Country Center of Excellence Director, Money Fellows',
  },
  {
    image: person3,
    name: 'Mr. Marwan Abouzeid',
    description: 'Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra',
  },
  {
    image: person4,
    name: 'Mr. Karim El Mourabet',
    description: 'Solution Consulting Director - MEA, Finastra',
  },
  {
    image: person5,
    name: 'Ms. Siobhan Byron',
    description: 'Executive Vice President, Universal Banking, Finastra',
  },
  {
    image: person6,
    name: 'Mr. Narendra Mistry',
    description: 'Chief Product and Technology Officer Universal Banking, Finastra',
  },
  {
    image: person7,
    name: 'Mr. Ahmed Hamdy Bahey El Din',
    description: 'Head of Information Technology, Incolease',
  },
  {
    image: person8,
    name: 'Mr. Emad Shawky Habib Hanna',
    description: 'Chief Data and Analytics Officer, Banque Misr',
  },
  {
    image: person9,
    name: 'Ms. Heba Yehia',
    description: 'Head of Digital Products, Arab African International Bank',
  },
  {
    image: person10,
    name: 'Mr. Hamid Nirouzad',
    description: 'Managing Director - Africa, Finastra Universal',
  },
  {
    image: person11,
    name: 'Mr. Rudy Kawmi',
    description: 'Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking',
  },
  {
    image: person12,
    name: 'Mr. Matthew Hughes',
    description: 'Head of FS&I, International Markets, Atos',
  },
  {
    image: person13,
    name: "Mr. Daragh O'Byrne",
    description: 'Senior Director, Marketing, Universal Banking, Finastra',
  },
  {
    image: person14,
    name: 'Dr. Ismail Ali',
    description: 'Co-Founder and CEO of CARITech',
  },
  {
    image: person15,
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
