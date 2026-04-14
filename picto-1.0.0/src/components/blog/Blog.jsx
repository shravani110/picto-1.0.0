import { achievements, profile } from "../../data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import graduationIcon from "../../assets/images/graduation.png";
import certificationIcon from "../../assets/images/certification.png";
import skillIcon from "../../assets/images/skill.png";

const Blog = () => {
  const icons = [graduationIcon, certificationIcon, skillIcon];

  return (
    <div className="content py-25 px-2 relative" id="achievements">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">My Resume</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400 mb-8">
          B.Tech CSE student with a strong foundation in UI/UX design, front-end development, and cross-platform mobile apps. Experienced in building AI-integrated tools, comprehensive management systems, dynamic web dashboards, and engaging virtual environments.
        </p>
        <a
          href="/picto/Shravani-Resume.pdf"
          download
          className="btn btn-primary text-white inline-flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faDownload} /> DOWNLOAD RESUME
        </a>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
        {achievements.map((item, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#EDD8FF80] rounded-lg flex items-center justify-center">
                <img
                  src={icons[index]}
                  alt={item.date}
                  className="w-10 h-10 object-contain opacity-75"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {item.date}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
