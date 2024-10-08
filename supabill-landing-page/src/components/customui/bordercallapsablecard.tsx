import { AccordionCustom } from "@/renderer/ui/accordian";
import React from "react";

type Props = {};

function Bordercallapsablecard({}: Props) {
  return (
    <div className="flex flex-col md:flex-row my-24">
      <div className="px-3 w-full md:w-1/2 flex items-start justify-center">
        <AccordionCustom />
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/reports-screen-shot.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Bordercallapsablecard;
