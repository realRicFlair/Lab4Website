export const dynamic = "force-static";

import { useState, Suspense } from 'react';
//import RotatingGlassCube from './ui/glassCube';

import AboutSection from './aboutsection';
import ProjectsSnippet from './ui/ProjectsSnippet';
import ArrowButton from './ui/ArrowButton';
import Image from 'next/image';




export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
          
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            Hi I'm Adi, welcome to my <strong>personal website</strong> for Lab 4! 
          </p>
          <ArrowButton text="Learn more about me!" href="/about" />
        </div>

        <div className="flex items-center justify-center p-6 md:w-1/2 md:px-10 md:py-12">
          <Suspense fallback={<div>Loading...</div>}>
          <Image
                  src="/randomlol.png"
                  alt="wat"
                  width={800}
                  height={800}
                  className="rounded-3xl"
                />
          </Suspense>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <AboutSection />
        <ProjectsSnippet />
      </div>
    </main>
  );
}
