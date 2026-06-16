import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../../data/portfolioData";

const socialIcons = [
  { icon: faEnvelope, link: socialLinks[1].link, label: "Email" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : undefined}
      rel={item.link.startsWith("http") ? "noreferrer" : undefined}
      className="text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md"
      key={index}
      aria-label={item.label}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="text-xl w-4.5 aspect-square"
      />
    </a>
  ));
};

export default SocialMedia;
