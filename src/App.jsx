import Navbar from "./Component/Navbar";
import HeroSection from "./Component/hero";
import FeatureSection from "./Component/FeatureSection";
import WorkFlowsection from "./Component/WorkFlowsection";
import Pricing from "./Component/Pricing";
import TestiMonials from "./Component/TestiMonials";
import Footer from "./Component/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlowsection />
        <Pricing />
        <TestiMonials />
        <Footer />

      </div>
    </>
  );
};

export default App;