import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import certi1 from '../../assets/awards/BPW-2024_2.png'
import certi2 from '../../assets/awards/bestwork-03.png'
import certi3 from '../../assets/awards/bestwork-04.png'
import certi4 from '../../assets/awards/bestwork-01.png'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-6 py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

                <div className="md:w-1/2 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Cogent Solutions™</h3>
                        <p className="text-sm text-gray-300">
                            Through our conferences we transform your business challenges into opportunities.
                            Our clients and customers are leading government entities and the Fortune 500 companies.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-2">Awards</h4>
                        <div className="flex gap-4">
                            <img src={certi1} alt="Award 4" className="w-18 h-18 object-contain" />
                            <img src={certi2} alt="Award 2" className="w-18 h-18 object-contain" />
                            <img src={certi3} alt="Award 3" className="w-18 h-18 object-contain" />
                            <img src={certi4} alt="Award 1" className="w-18 h-18 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 space-y-4">
                    <h3 className="text-xl font-bold">Our office</h3>

                    <div className="text-sm text-gray-300 space-y-4">
                        <div className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 text-white" />
                            <p>
                                <strong>Middle East & Africa HQ</strong><br />
                                Office No: 209, The Metropolis Tower<br />
                                Business Bay, Dubai, United Arab Emirates
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 text-white" />
                            <p>
                                <strong>Asia Pacific HQ</strong><br />
                                7th floor Green Lanka Tower, Colombo<br />
                                Sri Lanka
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 text-white" />
                            <p>
                                <strong>Saudi Arabia HQ</strong><br />
                                Riyadh , Saudi Arabia
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-white" />
                            <p>+971 50 5718867</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-white" />
                            <p>partnerships@cogentsolutions.ae</p>
                        </div>
                    </div>

                </div>
            </div>

            <hr className="border-gray-700 my-8" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                <p>© 2025 Cogent Solutions Event Management LLC. All Rights Reserved.</p>
                <div className="flex gap-4 text-white">
                    <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="hover:text-blue-500" /></a>
                    <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-blue-600" /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-500" /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-blue-400" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
