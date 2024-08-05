"use client";
import React from "react";
import { AnimatedText } from "./AnimatedText";
import { ButtonNewYork } from "./Button";

export default function HeroSection({
  primaryText,
  secondaryText,
  buttonText,
}) {
  return (
    <section className="flex flex-col relative mx-auto mt-24 max-w-[80rem] px-6 text-center md:px-8">
      <AnimatedText title={primaryText} />
      <div className="flex self-center w-[73%]">
        <div className="w-full bg-gradient-to-br dark:from-black from-white from-30% dark:to-black/40 to-white/40 bg-clip-text py-6 text-2xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-2xl md:text-4xl lg:text-2xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          {secondaryText}
        </div>
      </div>
      <div className="w-20 self-center">
        <ButtonNewYork buttonTitle={buttonText} clickAction={() => {}} />
      </div>
    </section>
  );
}
