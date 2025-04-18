import { motion } from 'framer-motion';
import useScrollDirection from '../CustomHooks/useScrollDirection';

const scrollDirection = useScrollDirection();

function SectionFive() {
    const agendaItems = [
        {
            time: "09:30 AM",
            topic: "Welcome & Opening Remarks",
            description: "Kick-off and introduction to the Universal Banking Forum."
        },
        {
            time: "10:00 AM",
            topic: "Keynote: Reimagining the Future of Banking",
            description: "Exploring innovation, digital transformation, and Finastra’s strategic vision."
        },
        {
            time: "10:45 AM",
            topic: "Panel: Navigating the Global Banking Shift",
            description: "Industry leaders discuss AI, volatility, and evolving market dynamics."
        },
        {
            time: "12:00 PM",
            topic: "Networking Break",
            description: "Refreshments and networking with peers and speakers."
        },
        {
            time: "12:30 PM",
            topic: "Customer Spotlight",
            description: "Real-world success stories from regional banks using Finastra solutions."
        },
        {
            time: "01:15 PM",
            topic: "Closing Remarks",
            description: "Summarizing key takeaways and forward-looking statements."
        }
    ];

    return (
        <section className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <h2 className="text-3xl md:text-4xl text-gray-900">Agenda</h2>
                </div>

                <div className="md:w-2/3 space-y-6">

                    {agendaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 40, opacity: 0 }}
                            animate={scrollDirection === 'down' ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="flex gap-6 items-start">
                                <div className="w-24 text-right text-sm font-semibold text-gray-600">
                                    {item.time}
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">{item.topic}</p>
                                    <p className="text-sm text-gray-700">{item.description}</p>
                                </div>
                            </div>

                            {index !== agendaItems.length - 1 && (
                                <hr className="mt-4 border-gray-300" />
                            )}
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default SectionFive;
