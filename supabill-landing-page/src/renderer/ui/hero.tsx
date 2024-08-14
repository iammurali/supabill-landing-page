"use client";
import React from "react";
import { AnimatedText } from "./AnimatedText";
import { ButtonNewYork } from "./Button";

export default function HeroSection({
  primaryText,
  secondaryText,
  buttonText,
}: {
  primaryText: string;
  secondaryText: string;
  buttonText: string;
}) {
  return (
    <section className="flex flex-col relative mx-auto md:mt-24 md:max-w-[80rem] px-2 text-center md:px-8">
      <AnimatedText title={primaryText} />
      <div className="flex self-end md:self-center w-full md:w-[73%]">
        <div className="w-full text-left md:text-center bg-gradient-to-br dark:from-black from-white from-30% dark:to-black/40 to-white/40 bg-clip-text md:py-6 text-xl font-medium leading-[1.5rem] tracking-tighter text-transparent md:text-balance sm:text-2xl md:text-4xl lg:text-2xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          {secondaryText}
        </div>
      </div>
      <div className="flex md:block w-full self-end items-end md:w-20 md:self-center">
        <ButtonNewYork buttonTitle={buttonText} clickAction={() => {}} />
      </div>
    </section>
  );
}
