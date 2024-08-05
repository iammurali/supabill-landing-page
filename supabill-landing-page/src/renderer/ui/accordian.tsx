import ShineBorder from "@/components/magicui/shine-border";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionCustom() {
  const colorValue = { color: ["#1E1E22", "#DC4FFF", "#4361EE"] };
  return (
    <Accordion type="single" collapsible className="w-full">
      <ShineBorder
        className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <AccordionItem
          value="item-1"
          style={
            {
              "--border-width": `${2}px`,
              "--border-radius": `${20}px`,
              "--shine-pulse-duration": `${14}s`,
              "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
              "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
                colorValue.color instanceof Array
                  ? colorValue.color.join(",")
                  : colorValue.color
              },transparent,transparent)`,
            } as React.CSSProperties
          }
          className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
        >
          <AccordionTrigger className="w-full h-full">
            Effortless Billing
          </AccordionTrigger>
          <AccordionContent color="#fff" style={{ color: "#fff" }}>
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Shine Border
            </span>
          </AccordionContent>
        </AccordionItem>
      </ShineBorder>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent color="#fff">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent color="#fff">
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
