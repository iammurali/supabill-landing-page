"use client";
import React from "react";
import { AnimatedText } from "./AnimatedText";
import { ButtonNewYork } from "./Button";
import { PrimaryText } from "./primarytext";

export default function BillingCard({
  primaryText,
  secondaryText,
  buttonText,
}: {
  primaryText: string;
  secondaryText: string;
  buttonText: string;
}) {
  return (
    <section className="flex flex-col relative mx-auto mt-36 md:mt-24 w-full md:max-w-[80rem] px-6 text-center md:px-8">
      <PrimaryText title={primaryText} />
      <div className="flex self-center w-full md:w-[73%]">
        <div className="w-full text-left md:text-center bg-gradient-to-br dark:from-black from-white from-30% dark:to-black/40 to-white/40 bg-clip-text py-6 text-2xl font-medium md:leading-none tracking-tighter text-transparent text-balance sm:text-2xl md:text-4xl lg:text-2xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          {secondaryText}
        </div>
      </div>
      <div className="w-20 self-start md:self-center">
        <ButtonNewYork buttonTitle={buttonText} clickAction={() => {}} />
      </div>
    </section>
  );
}
