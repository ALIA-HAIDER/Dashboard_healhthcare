import BTnCompo from "./BtnCompo";

export const Header = () => {
  return (
    <div>
        <div className="truncate z-10 h-10 mt-16 w-full bg-[#2292A4] flex  items-center mt-30 mb-[-50px] origin-bottom-left -rotate-3">
        <p className=" text-black  font-medium text-4xl  ml-40 animate-slideInOut">
        Manage patients, book appointments, and stay updated—all in one place. Your health, simplified.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-white p-6 my-0">
        <div className="text-center flex flex-col items-center justify-center ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold ">
            WELCOME TO YOUR
            <span className="block text-[#2292A4]">MEDICAL HUB</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#FFFFFF] font-light max-w-5xl mx-auto">
            Step into a comprehensive health management experience where patient
            care meets efficiency. Access vital records, manage appointments,
            and stay connected with real-time updates—all in one seamless
            platform designed for healthcare excellence.
          </p>
        </div>
        <BTnCompo text={"Dashboard"} sty="font medium px-8 py-3 text-lg  " />
      </div>
      <div className="truncate z-10 h-12 w-full bg-[#2292A4] flex  items-center mt-[-30px] origin-bottom-left -rotate-3">
        <p className=" text-black  font-medium text-4xl  ml-40 animate-slideInOut ">
        Manage patients, book appointments, and stay updated—all in one place. Your health, simplified.

        </p>
      </div>
    </div>
  );
};
