"use client";
import { PrimaryText } from "@/renderer/ui/primarytext";
import React from "react";
import ShineBorder from "../magicui/shine-border";
import { ButtonNewYork } from "@/renderer/ui/Button";
import { Button } from "../ui/button";

type Props = {};

function PricingCard({}: Props) {
  return (
    <section className="flex flex-col relative mx-auto md:mt-24 px-6 text-center md:py-8 md:my-5 md:px-8">
      <PrimaryText title={"Pricing"} />
      <div className="flex text-left md:text-center items-end md:self-center w-full md:w-[73%]">
        <div className="w-full bg-gradient-to-br dark:from-black from-white from-30% dark:to-black/40 to-white/40 bg-clip-text md:py-6 text-2xl font-medium leding-[1.5rem] md:leading-none tracking-tighter text-transparent text-balance sm:text-2xl md:text-4xl lg:text-2xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          {"One Price Fits All – No Hidden Fees, No Surprises"}
        </div>
      </div>
      <div className="flex left-[400px] items-center justify-center min-h-screen absolute z-0 top-[20px]">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[#AF80FF] to-[#270D53] blur-[70px] opacity-35" />
        </div>
      </div>
      <div className="gap-6 md:gap-10 self-center py-3 px-5 bg-black relative z-20 flex w-full md:w-[65%] flex-col items-center justify-between overflow-hidden rounded-md border border-[#FFD873] md:shadow-xl">
        <div className="flex text-left md:text-center flex-col gap-3 items-start justify-start md:justify-center w-full">
          <p className="text-[#FFD873] text-xl md:text-lg">
            Supabill User (First 6 Months free)
          </p>
          <p className="text-[#9CA3AF]">
            Get unlimited features, offline functionality, and top-notch support
            - all for a single, straightforward price.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 py-4 self-start items-start md:items-end justify-between">
          <span className="text-[#3B3B3B] line-through text-xl">₹ 599</span>
          <span className="text-white text-4xl">₹ 180/ month</span>
          <span className="text-[#3B3B3B] text-xl">Billed annually</span>
        </div>
        <Button color="#F1F5F9" variant={"secondary"} className="w-full">
          Get supabill now
        </Button>

        <div className="flex flex-wrap gap-4 py-4 w-full md:w-[85%] items-center justify-start self-start">
          {[
            "Unlimited bill creation",
            "Detailed report generation",
            "Expense tracking",
            "Hardware integration for billing",
            "Downloadable and offline use",
            "Quick support",
          ].map((item, index) => {
            return (
              <div key={index} className="flex gap-1">
                <img width={25} height={25} src="/check.png" alt="" />
                <div className="text-white text-lg">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingCard;
