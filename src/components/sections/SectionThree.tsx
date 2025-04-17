import icon1 from '../../assets/icons/Icon_5h.png'
import icon2 from '../../assets/icons/Icon_4f.png'
import icon3 from '../../assets/icons/Icon_2ff.png'
import icon4 from '../../assets/icons/Icon_8d.png'
import icon5 from '../../assets/icons/Icon_1f.png'
import watch_img from '../../assets/images/Finastra-UB-Egypt-Benefits-of-attending SMALL.jpg'

function SectionThree() {
    return (
      <section className="w-full py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2">
            <img
              src={watch_img}
              alt="Reasons to Attend"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
            
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl text-gray-100 mb-6">
              Top reasons why this is the only conference you need to attend in 2025
            </h2>
  
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <img src={icon1} alt="icon" className="w-6 h-6 mt-1" />
                <p className="text-gray-100"><strong>Learn</strong> from industry experts</p>
              </li>
              <li className="flex items-start gap-3">
                <img src={icon2} alt="icon" className="w-6 h-6 mt-1" />
                <p className="text-gray-100"><strong>Trends</strong> Stay ahead of emerging trends</p>
              </li>
              <li className="flex items-start gap-3">
                <img src={icon3} alt="icon" className="w-6 h-6 mt-1" />
                <p className="text-gray-100"><strong>Connect</strong> with fellow banking professionals</p>
              </li>
              <li className="flex items-start gap-3">
                <img src={icon4} alt="icon" className="w-6 h-6 mt-1" />
                <p className="text-gray-100"><strong>Enhance</strong> your knowledge, skills, and network</p>
              </li>
              <li className="flex items-start gap-3">
                <img src={icon5} alt="icon" className="w-6 h-6 mt-1" />
                <p className="text-gray-100"><strong>Share</strong> your expertise and experience with peers</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default SectionThree;
  