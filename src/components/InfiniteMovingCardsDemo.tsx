"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { IconArrowRight } from "@tabler/icons-react";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-center text-6xl font-normal">Yes. We cover your tech stack.</h2>
        <p className="w-[30vw] text-center text-2xl mt-8 mb-16">Our 4,000+ team has expertise in almost every programming language.</p>
      <InfiniteMovingCards
        items={firstLine}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={secondLine}
        direction="left"
        speed="slow"
      />
      <div className="flex max-w-7xl my-auto justify-between items-center"> 
      
        <div className="border-b-2">
          <button className="flex gap-4 group w-fit h-fit py-4 pr-4 transition-transform duration-300 transform hover:translate-x-4">
          Our full repertoire <IconArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

const firstLine = [
    {
      name: "Javascript",
    },
  {
       name: "HTML",
  },
  {
       name: "Nuxt.js",
  },
  {
    name: "React.js",
  },
  {
   name: "MongoDB",
  },
  {
       name: "SQL",
  },
  {
       name: "Swift",
  },
  {
       name: "Postgres",
  },
  {
       name: "Python",
  },
  {
       name: "Node.js",
  },
  {
       name: "Redux",
  },
];

const secondLine = [
    {
      name: "TypeScript",
    },
    {
      name: "CSS",
    },
  {
       name: "Ruby",
  },
  {
    name: "PHP",
  },
  {
   name: "Java",
  },
  {
       name: "Kotlin",
  },
  {
       name: "Angular",
  },
  {
       name: "Vue.js",
  },
  {
       name: "Tailwind CSS",
  },
  {
       name: "Express.js",
  },
  {
       name: "Next.js",
  },
];
