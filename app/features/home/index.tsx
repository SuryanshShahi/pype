"use client";
import { useState, useRef, useEffect } from "react";
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
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current) {
            setVisible(isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="space-y-24">
      <HeroSection />
      <IndustryLeaders />
      <ReliableAndScalable />
      <Challenges />
      <AiAtWork />
      <Integrations />
      <InteractionsAndGrowing visible={visible} ref={ref} />
      <Testimonials />
      <Faqs />
      <InteractionForm />
    </div>
  );
};

export default Home;
