import Navigation from "../app/home/components/Navigation/Navigation"
import HeroPage from "./home/components/HeroPage/HeroPage/HeroPage";
import ProductsSection from "./home/components/HeroPage/ProductsSection/ProductsSection";
import Slider from "./home/components/Slider/Slider";
import RestaurantModels from "./home/components/RestaurantModels/RestaurantModels";
import RestaurantModelList from "./home/components/RestaurantModelList/RestaurantModelList";
import ManagersSection from "./home/components/ManagersSection/ManagersSection";
import PurpleMask from "./home/components/PurpleMask/PurpleMask";
import Devices from "./home/components/Devices/Devices";
import BackBone from "./home/components/BackBone/BackBone";
import Pricing from "./home/components/Pricing/Pricing";
import CallToAction from "./home/components/CallToAction/CallToAction";
import Footer from "./home/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroPage />
      <ProductsSection />
      <Slider />
      <RestaurantModels />
      <RestaurantModelList />
      <ManagersSection />
      <PurpleMask />
      <Devices />
      <BackBone />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}
