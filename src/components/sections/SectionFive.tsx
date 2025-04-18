import { motion } from 'framer-motion';
import useScrollDirection from '../CustomHooks/useScrollDirection';

function SectionFive() {
    const scrollDirection = useScrollDirection();

    const agendaItems = [
        {
            time: "09:30 AM",
            topic: "Registration",
            description: "Registration & Welcome Coffee"
        },
        {
            time: "10:00 AM",
            topic: "Opening Remarks",
            description: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking"
        },
        {
            time: "10:10 AM",
            topic: "Keynote session: Digital Transformation in a Gen AI World",
            description: "Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking"
        },
        {
            time: "10:30 AM",
            topic: "Decoding the Future - Transformation: The Opportunity & Time is Now",
            description: "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra"
        },
        {
            time: "11:00 AM",
            topic: "Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
            description: "Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking\nAhmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. “Incolease’’.\nMs. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR"
        },
        {
            time: "11:30 AM",
            topic: "Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead",
            description: "Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking\nHeba Yehia, Head of Digital Products, Arab African International Bank;\nIsmail Ali, Co-Founder and CEO of CARITech\nMohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt"
        },
        {
            time: "12:00 PM",
            topic: "Coffee Break & Networking",
            description: ""
        },
        {
            time: "12:30 PM",
            topic: "Panel Discussion: Cost to Serve: Deliver Customer Delight",
            description: "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking\nShehab Moustafa, Country Center of Excellence Director, Money Fellows;\nMatthew Hughes, Head of FS&I, International Markets, Atos\nEmad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr."
        },
        {
            time: "01:00 PM",
            topic: "The Essential Elements: What do you need to be 'all things to all people'?",
            description: "Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking"
        },
        {
            time: "01:30 PM",
            topic: "Making the case for change: The Question is How",
            description: "Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking"
        },
        {
            time: "01:50 PM",
            topic: "Closing Remarks",
            description: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking"
        },
        {
            time: "02:00 PM",
            topic: "Lunch",
            description: ""
        }
    ];

    // useEffect(() => {
    //     console.log('Scroll Direction:', scrollDirection);
    // }, [scrollDirection]);

    return (
        <section className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <h2 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-300 to-pink-400 leading-relaxed">
                        Agenda
                    </h2>

                </div>

                <div className="md:w-2/3 space-y-6 bg-purple-100 p-8 rounded-lg">
                    {agendaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={scrollDirection === 'down'
                                ? { y: 0, opacity: 1 }
                                : { y: 0, opacity: 1 }}
                            transition={scrollDirection === 'down'
                                ? { duration: 0.5, delay: index * 0.1 }
                                : { duration: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="flex gap-6 items-start">
                                <div className="w-24 text-right text-sm font-semibold text-gray-600">
                                    {item.time}
                                    {item.time === "09:30 AM" && (
                                        <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-blue-100 bg-blue-600 rounded-full">
                                            Registration
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">{item.topic}</p>
                                    <p className="text-sm text-gray-700">{item.description}</p>
                                </div>
                            </div>

                            {index !== agendaItems.length - 1 && (
                                <hr className="mt-4 border-purple-600" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionFive;
