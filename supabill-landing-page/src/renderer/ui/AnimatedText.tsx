import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

type Props = {
  title: string;
};
export async function AnimatedText({ title }: Props) {
  return (
    <div className="text-left md:text-center bg-gradient-to-br dark:from-black from-white from-30% dark:to-black/40 to-white/40 bg-clip-text py-8 text-[1.8rem] font-medium leading-[2rem] tracking-tight text-transparent md:text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
      {title}
    </div>
  );
}
