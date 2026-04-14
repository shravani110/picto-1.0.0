import WorkSteps from "./WorkSteps";
import { skills } from "../../data/portfolioData";
import uiuxIcon from "../../assets/images/skill.png";
import programmingIcon from "../../assets/images/skill.png";
import frontendIcon from "../../assets/images/skill.png";

const skillIcons = [uiuxIcon, programmingIcon, frontendIcon];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-2 md:py-5 lg:py-15 xl:py-20 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">My Skills</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Transforming creative concepts into fully functional digital products. I focus on designing intuitive, user-centric interfaces and writing the clean, responsive code that powers dynamic mobile apps and interactive web environments.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto">
        {skills.map((data, index) => (
          <WorkSteps
            data={data}
            icon={skillIcons[index]}
            style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
              index % 2 === 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
