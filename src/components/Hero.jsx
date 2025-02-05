import React from "react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSize = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.to('#cta',{
        opacity:1,
        y:-50,
        delay:2,
    })
  }, []);

  return (
    <section className="w-full nav-height bg-black relative overflow-hidden">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex items-center justify-center flex-col translate-y-20 opacity-0">
        <a href="#highligths" className="btn">Buy</a>
        <p className="font-normal text-base">From $199/month or $900</p>
      </div>
    </section>
  );
};

export default Hero;
