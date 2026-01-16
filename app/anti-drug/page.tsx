import AntiDrugCampaign from "./_component/AntiDrugCompaign";
import AntiDrugFinalSections from "./_component/AntiDrugFinalSection";
import AntiDrugMinistryDetails from "./_component/AntiDrugMinistryDetails";
import AntiDrugHero from "./_component/Hero";

const Page = () => {

  return (
      <>
      <AntiDrugHero />
      <div className="w-full">
        <div className=" container">

      <AntiDrugCampaign/>
      <AntiDrugMinistryDetails/>
      <AntiDrugFinalSections/>
        </div>
      </div>
   </>
  );
};

export default Page;