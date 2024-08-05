import { AccordionCustom } from "@/renderer/ui/accordian";
import React from "react";

type Props = {};

function Bordercallapsablecard({}: Props) {
  return (
    <div className="flex">
      <div className="w-1/2">
        <AccordionCustom />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default Bordercallapsablecard;
