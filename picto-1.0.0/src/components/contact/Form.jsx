import { profile } from "../../data/portfolioData";

const telegramSVG = (
  <svg
    className="w-4 md:w-6 aspect-square"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.34 9.32013L6.34 2.32013C5.78749 2.04514 5.16362 1.94724 4.55344 2.03978C3.94326 2.13232 3.37646 2.4108 2.93033 2.83724C2.48421 3.26369 2.18046 3.81735 2.0605 4.42274C1.94054 5.02813 2.0102 5.65578 2.26 6.22013L4.66 11.5901C4.71446 11.72 4.74251 11.8593 4.74251 12.0001C4.74251 12.1409 4.71446 12.2803 4.66 12.4101L2.26 17.7801C2.0567 18.2368 1.97076 18.7371 2.00998 19.2355C2.0492 19.7339 2.21235 20.2145 2.48459 20.6338C2.75682 21.0531 3.12953 21.3977 3.56883 21.6363C4.00812 21.875 4.50009 22 5 22.0001C5.46823 21.9955 5.92949 21.8861 6.35 21.6801L20.35 14.6801C20.8466 14.4303 21.264 14.0474 21.5557 13.5742C21.8474 13.101 22.0018 12.556 22.0018 12.0001C22.0018 11.4442 21.8474 10.8993 21.5557 10.4261C21.264 9.95282 20.8466 9.56994 20.35 9.32013H20.34Z"
      fill="white"
    />
  </svg>
);

const commonClass =
  "input input-lg border-0 border-b-2 focus:outline-none focus:placeholder:text-picto-primary placeholder:text-[15px] md:placeholder:text-lg focus:border-picto-primary border-[#E6E8EB] w-full rounded-none px-0";

const Form = () => {
  return (
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark">
        I'm open to internships, collaborative work, and opportunities to build
        mobile and front-end products.
      </p>
      <div className="mx-2">
        <form
          className="flex flex-col gap-4 mt-4"
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
        >
          <input
            type="text"
            placeholder="Name*"
            className={commonClass}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            className={commonClass}
            required
          />
          <input
            type="text"
            placeholder="Location*"
            className={commonClass}
            required
          />

          <div className="flex max-xs:flex-col max-xs:gap-4">
            <input
              type="text"
              placeholder="Role / Opportunity*"
              className={`${commonClass} xs:w-[50%] me-5`}
              required
            />
            <input
              type="text"
              placeholder="Subject*"
              className={commonClass}
              required
            />
          </div>

          <input
            type="text"
            placeholder="Message*"
            className={commonClass}
            required
          />
          <button
            type="submit"
            className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4"
          >
            Send Message {telegramSVG}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
