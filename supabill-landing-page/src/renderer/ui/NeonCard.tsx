import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import ProductImageSection from "./productImage";
import ShineBorder from "@/components/magicui/shine-border";
import ClientSection from "./clientlogo";

export async function NeonGradientCardDemo() {
  return (
    <div className="flex w-full items-center justify-center h-[35vh] md:h-screen relative">
      <div className="flex items-center justify-center min-h-[35vh] md:min-h-screen absolute z-0 top-[-80px]">
        <div className="relative w-[300px] h-[300px] md:w-[800px] md:h-[800px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[#AF80FF] to-[#270D53] blur-[70px] opacity-35" />
        </div>
      </div>

      <ShineBorder
        borderRadius={12}
        borderWidth={2}
        duration={20}
        className="py-1 px-1 mx-4 bg-black relative z-20 flex w-full md:w-[75%] flex-col items-center justify-center overflow-hidden md:shadow-xl"
        color={["#1E1E22", "#DC4FFF", "#4361EE"]}
      >
        <span className="relative z-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          <img
            src="/supabill2.png"
            alt="Supabill Product"
            className="w-full h-full object-cover"
          />
        </span>
      </ShineBorder>
      <div className="px-2 w-full z-50 md:h-[270px] top-[360px] md:top-[500px] absolute inset-0 bg-black from-black via-transparent to-transparent opacity-100 flex flex-col items-center justify-center">
        <div className="md:mt-12 pt-8 bg-gradient-to-br dark:from-black from-white from-30% dark:to-black/40 to-white/40 bg-clip-text py-6 text-xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-2xl md:text-2xl lg:text-xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          Because Even Great Places Deserve Simple Billing
        </div>
        <ClientSection />
      </div>
    </div>
  );
}
