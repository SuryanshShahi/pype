"use client";
import AiAtWork from "./sections/AiAtWork";
import Challenges from "./sections/Challenges";
import Faqs from "./sections/Faqs";
import HeroSection from "./sections/HeroSection";
import IndustryLeaders from "./sections/IndustryLeaders";
import Integrations from "./sections/Integrations";
import InteractionForm from "./sections/InteractionForm";
import InteractionsAndGrowing from "./sections/InteractionsAndGrowing";
import ReliableAndScalable from "./sections/ReliableAndScalable";
import Testimonials from "./sections/Testimonials";

const Home = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <IndustryLeaders />
      <ReliableAndScalable />
      <Challenges />
      <AiAtWork />
      <Integrations />
      <InteractionsAndGrowing />
      <Testimonials />
      <Faqs />
      <InteractionForm />
    </div>
  )
}

export default Home;
