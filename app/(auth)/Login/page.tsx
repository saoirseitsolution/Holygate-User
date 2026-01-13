import Image from "next/image";
import AuthCard from "@/components/userComponents/login/AuthCard";

const Page = () => {
  return (
    <div className=" w-full overflow-hidden flex flex-col relative">
      {/* Logo */}
      <div className="absolute top-4 left-8 z-20">
        <div className="w-[10vh] sm:w-[15vh] md:w-[18vh] lg:w-[20vh]">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col mt-32  lg:flex-row items-center justify-between grow px-6 md:px-16 lg:px-20 ">
        {/* Left - Auth Card */}
        <div className="pt-0 lg:pt-20 flex justify-center lg:justify-start w-full lg:w-1/2 z-10 ">
          <AuthCard />
        </div>

        {/* Right - Background Image */}
        <div className="absolute right-0 w-full lg:w-1/2 h-[50vh] lg:h-[80vh] flex justify-center lg:justify-start items-center">
          <img
            src="/spiritual-image.png"
            alt="Spiritual imagery"
            className="w-[80%] lg: object-contain opacity-90"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="py-8 text-center">
        <h1 className="text-xl md:text-2xl font-serif text-gray-400 tracking-[0.3em] uppercase ">
          The door ways to living faith
        </h1>
      </div>
    </div>
  );
};

export default Page;
