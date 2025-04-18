import { motion } from 'framer-motion';
import SectionThree from './SectionThree';

function SectionTwo() {
  return (
    <section className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">

        <motion.div
          className="md:w-1/3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-100">
            Event <br />Overview
          </h2>
        </motion.div>

        <motion.div
          className="md:w-2/3 text-gray-100 space-y-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <p>
            Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, <strong>"Reimagine Banking: Adapt. Evolve. Thrive."</strong> This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
          </p>
          <p>
            Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.
          </p>
          <p>
            Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.
          </p>
          <p>
            Don’t miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 mx-auto w-3/4 bg-gradient-to-r from-purple-900 to-purple-400 py-2 px-3 rounded-3xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <SectionThree />
      </motion.div>

    </section>
  );
}

export default SectionTwo;
