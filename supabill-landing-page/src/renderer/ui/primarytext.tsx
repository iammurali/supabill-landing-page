import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

type Props = {
  title: string;
};
export async function PrimaryText({ title }: Props) {
  return (
    <div className="bg-gradient-to-br dark:from-black from-white from-30% dark:to-black/40 to-white/40 bg-clip-text py-6 text-4xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-4xl md:text-5xl lg:text-5xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
      {title}
    </div>
  );
}
