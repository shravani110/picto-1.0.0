import Projects from "./Projects";
import restaurantImg from "../../assets/images/Restaurant.png";
import weatherImg from "../../assets/images/weather application dashboard.png";
import taskManagerImg from "../../assets/images/Intelligent Task Manger.png";
import operationImg from "../../assets/images/operational finaldawn.png";
import cyberSpaceImg from "../../assets/images/project cyberspace.png";
import portfolioImg from "../../assets/images/portfolio-images/card-6.png";
import { projects } from "../../data/portfolioData";

const projectImages = [cyberSpaceImg, weatherImg, taskManagerImg, operationImg, restaurantImg, portfolioImg];

const projectData = projects.map((project, index) => ({
  ...project,
  image: projectImages[index % projectImages.length],
}));

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">My Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            My projects demonstrate a fusion of user-centered design and front-end development, encompassing smart productivity apps, versatile management systems, and interactive environments that resolve intricate challenges.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
