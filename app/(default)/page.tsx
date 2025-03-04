'use client';
import './page.css';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

import SliderAnimation from "@/components/slideranimation";
import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import ImageCarousel from '@/components/carousel';
import Cta from "@/components/cta";
import FAQSection from "@/components/faqs";
import ProductDemo from "@/components/ProductDemo";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#4FA0FF", "#C0C0C0", "#808080", "#2DD702"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 30 },
      },
      links: {
        enable: true,
        distance: 500,
        color: "#808080",
        opacity: 0.4,
        width: 0,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none" as const,
        random: true,
        straight: true,
        outModes: "out" as const,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.8,
            width: 100,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  return (
    <div className="relative  z-20">
      <Particles
        className="absolute inset-0 -z-10"
        options={particlesOptions}
        init={particlesInit}
      />
      <div className="relative z-10">
        <div className="mt-[125px] mx-auto w-[100%] lg:w-[95%] h-fit px-4 sm:px-6 pb-[25px] bg-[#f4f4f6] rounded-xl">
          <Hero />
          <div className="">
            <BusinessCategories />
          </div>
          <div className="mt-[80px] lg:block hidden relative left-[50%] right-[50%] mx-[-50vw] w-screen">
            <h2 className="text-3xl font-bold text-[#477dd7] text-center sm:mb-0 md:text-5xl">1. All listings in one place - Meta Search</h2>
            <h3 className="text-lg font-semibold text-grey-400 text-center mt-2 md:text-3xl">compare prices, pictures, videos, amenities and ratings</h3>
            <h3 className="text-base font-medium text-green-500 text-center mt-1 md:text-4xl">for 10+ online sites and offline channels</h3>
            <SliderAnimation />
          </div>
          <div className='my-[180px]'>
            <FeaturesPlanet />
          </div>
          <div className="mt-[80px] text-center">
            {/* <h2 className="text-3xl font-bold text-[#477dd7] md:text-5xl">2. AI Personal Staff for Everything...</h2>
            <h3 className="text-lg font-semibold text-grey-400 mt-2 md:text-3xl">Let AI handle the hard work while you focus on living.</h3>
            <h3 className="text-base font-medium text-green-500 mt-1 md:text-4xl">Experience efficiency like never before.</h3> */}
          </div>
          <div className='my-20'>
            <ProductDemo />
          </div>
          <div className="mt-[80px] text-center">
            <h2 className="text-3xl font-bold text-[#477dd7] md:text-5xl">Launching on Play Store Soon</h2>
            <h3 className="text-lg font-semibold text-grey-400 mt-2 md:text-3xl">Join now for early access & perks</h3>
            <h3 className="text-base font-medium text-green-500 mt-1 md:text-4xl">Experience the future of home search</h3>
          </div>
          <div className="my-20">
            <ImageCarousel />
          </div>
          <LargeTestimonial />
          <div className="text-center mb-6">
            <h2 className="text-5xl font-bold text-[#477dd7]">Save Time. Save Money</h2>
            <p className="text-4xl font-bold text-green-500 mt-2">welcome homescanner, goodbye trouble</p>
          </div>
          <video autoPlay loop muted playsInline className="w-full h-auto rounded-3xl border-4 border-white-1000 shadow-lg -mb-20">
            <source src="/video/HomeScanner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-10">
            <Cta />
          </div>
          <div className="mt-10">
            <FAQSection />
          </div>
        </div>
      </div>
    </div>
  );
}
