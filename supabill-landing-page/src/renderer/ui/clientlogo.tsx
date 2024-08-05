import React from "react";

export default function ClientSection() {
  return (
    <section className="py-8 bg-black text-center w-full flex items-center justify-center">
      <div className="flex space-x-8 self-center">
        <img src="/logo1.svg" alt="Client 1" className="h-12" />
        <img src="/logo2.svg" alt="Client 2" className="h-12" />
        <img src="/logo3.svg" alt="Client 3" className="h-12" />
        <img src="/logo4.svg" alt="Client 4" className="h-12" />
      </div>
    </section>
  );
}
