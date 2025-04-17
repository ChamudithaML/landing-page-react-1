import finastra from '../../assets/images/finastra-boardroom.png'
import finastra2 from '../../assets/images/Finastra-UB-Egypt-Event-Overview SMALL.jpg'
import background from '../../assets/images/lightpng_1711694345_16780.png'

function SectionOne() {
  return (
    <section className="w-full bg-gray-800 pt-24 pb-12 px-4 text-center"
    style={{ backgroundImage: `url(${background})` }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">
          Organized by
        </p>

        <img
          src={finastra}
          alt="Event Visual"
          className="w-full max-w-md mx-auto"
        />

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 leading-tight mb-4">
          Reimagine Banking:<br />
          <span className="text-gray-100">Adapt. Evolve. Thrive.</span>
        </h1>

        <p className="text-lg text-gray-500 mb-2">
          Date: <strong>9th April 2025</strong>
        </p>
        <p className="text-lg text-gray-500 mb-2">
          Time: <strong>9:30 AM - 2:00 PM GMT+2</strong>
        </p>
        <p className="text-lg text-gray-500 mb-6">
          <strong>The Nile Ritz-Carlton, Cairo, Egypt</strong>
        </p>

        <img
          src={finastra2}
          alt="Event Visual"
          className="w-full max-w-md mx-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  )
}

export default SectionOne;
