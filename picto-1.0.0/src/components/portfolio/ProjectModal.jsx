import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl">
        {/* Header */}
        <div className="bg-white sticky top-0 border-b p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {project.title.toUpperCase()}
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {/* Project Image */}
          <div className="mb-6 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* About Project */}
          <div>
            <div className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {project.detailedDescription}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t bg-white p-4 md:p-6 flex justify-between gap-3">
          <div className="flex gap-2">
            {(project.title === "Weather Application Dashboard" ||
              project.title === "Hearth & Home Restaurant Management App") && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn bg-gray-900 text-white hover:bg-gray-800 text-base font-semibold px-4 md:px-6 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
                GIT
              </a>
            )}
            {project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noreferrer"
                className="btn bg-gray-900 text-white hover:bg-gray-800 text-base font-semibold px-4 md:px-6 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faFigma} size="lg" />
                OPEN FIGMA
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="btn btn-outline text-base font-semibold px-6"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
