import BillingCard from "@/renderer/ui/billingcard";
import ClientSection from "@/renderer/ui/clientlogo";
import Header from "@/renderer/ui/header";
import HeroSection from "@/renderer/ui/hero";
import { NeonGradientCardDemo } from "@/renderer/ui/NeonCard";
import ProductImageSection from "@/renderer/ui/productImage";
import Bordercallapsablecard from "./customui/bordercallapsablecard";

const LandingPage = () => {
  return (
    <div className="mx-auto flex-1 overflow-hidden">
      <Header />
      <HeroSection
        buttonText={"Try Supabill today"}
        secondaryText={
          "Streamline your billing with simplicity, affordability, and zero headaches — because you deserve it"
        }
        primaryText={"Simplify billing with Supabill sleek, easy, and painless"}
      />
      {/* <ProductImageSection /> */}
      <NeonGradientCardDemo />
      <BillingCard
        buttonText={"Get Supabill"}
        secondaryText={
          "Discover the Features that Make Us the Gold Standard in POS Software"
        }
        primaryText={"Billing So Simple, Competitors Are Jealous"}
      />
      <Bordercallapsablecard />
    </div>
  );
};
export default LandingPage;
