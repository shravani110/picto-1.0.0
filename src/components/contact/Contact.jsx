import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import { profile } from "../../data/portfolioData";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: profile.location,
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: profile.email,
  },
  {
    icon: faPhone,
    title: "Phone",
    description: profile.phone,
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-2 md:p-5 lg:p-12 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between gap-4">
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238]">
                Let's build something amazing together.
              </p>
            </div>
            <div className="my-4 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="w-full py-3">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              Let's build something amazing together.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
