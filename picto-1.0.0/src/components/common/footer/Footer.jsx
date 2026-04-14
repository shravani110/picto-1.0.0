import { profile } from "../../../data/portfolioData";

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-center mx-0 items-center h-full w-full text-neutral-200">
        <p className="text-[12px] sm:text-[16px]">
          © 2026 {profile.fullName} All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
