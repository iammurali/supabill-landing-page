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
    <Accordion type="single" collapsible className="w-[70%]">
      <AccordionItem
        value="item-1"
        className={`border-none before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      >
        <AccordionTrigger className="w-full h-full text-white text-4xl">
          Effortless Billing
        </AccordionTrigger>
        <AccordionContent
          color="#fff"
          className="h-32"
          style={{ color: "#fff" }}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-white bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 py-4">
            Quickly generate or hold bills with a single click. Streamlines the
            checkout process and keeps things running smoothly.
          </span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger className="w-full h-full text-white text-4xl">
          Your Data, Your Control
        </AccordionTrigger>
        <AccordionContent
          className="h-32"
          color="#fff"
          style={{ color: "#fff" }}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-white bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 py-4">
            Quickly generate or hold bills with a single click. Streamlines the
            checkout process and keeps things running smoothly.
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger className="w-full h-full text-white text-4xl">
          Swift Reporting
        </AccordionTrigger>
        <AccordionContent
          className="h-32"
          color="#fff"
          style={{ color: "#fff" }}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-white bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 py-4">
            Quickly generate or hold bills with a single click. Streamlines the
            checkout process and keeps things running smoothly.
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-none">
        <AccordionTrigger className="w-full h-full text-white text-4xl">
          Streamlined Expenses
        </AccordionTrigger>
        <AccordionContent
          className="h-32"
          color="#fff"
          style={{ color: "#fff" }}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-white bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 py-4">
            Quickly generate or hold bills with a single click. Streamlines the
            checkout process and keeps things running smoothly.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
