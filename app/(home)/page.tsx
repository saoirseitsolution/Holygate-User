import Faq from "@/app/(home)/_components/Faq";
import ServiceCards from "@/app/(home)/_components/ServiceCard";
import MiraclesSection from "./_components/MiraclesSection";
import NearbyChurches from "./_components/NearbyChurches";
import HeroSection from "./_components/HeroSection";
import DiscoverSection from "./_components/DiscoverSection";

const HomePage = () => {

  return (
    <div className="bg-white">
      <HeroSection/>
      <DiscoverSection/>
      <ServiceCards />
      <MiraclesSection/>
      <NearbyChurches/>
      <Faq/>
    </div>
  );
};

export default HomePage;