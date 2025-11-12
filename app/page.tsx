"use client";
import Image from "next/image";
import Link from "next/link";
import { useTriggerCmdK } from "./hooks/triggerCmd";
import { useState

 } from "react";
export default function Home() {
  const triggerCmdK = useTriggerCmdK();
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div>
      <div className="min-h-screen w-full grid grid-cols-1 mx-auto max-w-4xl">
        
        <div className="row-span-1 grid grid-cols-3 text-neutral-800  md:mt-3 mt-2 justify-end px-2">
          
          <div className="left col-span-1">
          <Image
          src="./Shover-full.svg"
          alt="Lol"
          width={128}
          height={100}
          className="justify-center"
          />
          </div>
          <div className="right max-h-10 col-span-2 text-md flex justify-end gap-6 items-center">
      {/* Hamburger button visible on small screens */}
      <div className="md:hidden items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-xl text-neutral-700 hover:bg-neutral-300"
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Menu items */}
      <div className={`flex flex-col md:flex-row gap-6 md:gap-6 absolute md:static right-0 md:right-auto top-12 md:top-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out
                      ${isOpen ? "block" : "hidden"} md:flex`}>
        <div>
          <button className="relative text-neutral-500 hover:text-neutral-800 p-2 rounded-lg font-medium group hover:cursor-pointer">
            <Link href="/docs">Docs</Link>
            <span className="absolute left-0 -bottom-1 h-0.25 w-0 bg-neutral-400 transition-all duration-1000 ease-out group-hover:w-full"></span>
          </button>
        </div>
        <div>
          <button className="relative text-neutral-500 hover:text-neutral-800 p-2 rounded-lg font-medium group hover:cursor-pointer">
            <Link href="/showcases">Showcases</Link>
            <span className="absolute left-0 -bottom-1 h-0.25 w-0 bg-neutral-400 transition-all duration-1000 ease-out group-hover:w-full"></span>
          </button>
        </div>
        <div>
          <button
            onClick={triggerCmdK}
            className="relative p-2 rounded-xl flex gap-2 bg-neutral-200 text-sm justify-center text-center items-center text-neutral-600 hover:cursor-pointer"
          >
            <div>&#128269;</div>
            <div>Search Components</div>
            <div className="font-mono bg-neutral-800 text-neutral-200 px-2 py-0.5 rounded-lg hover:cursor-pointer">
              &#8984;+K
            </div>
          </button>
        </div>
      </div>
    </div>
        </div>
        
        <div className="row-span-11 ml-4">
          <div className="md:text-5xl text-3xl mt-20 max-w-3xl tracking-tight text-wrap">
          Build modern, sleek & animated design interfaces with shover. <br />
          <p className="md:mt-4 md:text-lg text-sm mt-2 tracking-tight text-neutral-600">Copy, paste, or install via terminal. These components are built on top of shadcn/ui which <br />are crafted with my design style.</p> 
          </div>
          <div className="min-h-8 flex gap-4 mt-10">
            <div>
            <button className="relative group inline-flex items-center gap-1 bg-purple-100 p-2 text-purple-600 hover:cursor-pointer">
              <span>Get Started</span>
              <span className="transition-transform duration-500 group-hover:-rotate-45">
                &rarr;
              </span>
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-1500 ease-out group-hover:w-full"
              ></span>
            </button>

            </div>
            
            <div>
              <button className="p-2 text-neutral-600  underline underline-offset-8 decoration-neutral-400 hover:cursor-pointer">
                Browse Components
              </button>
            </div>
          </div>
        </div>

        <div className="Hero-Image relative w-full h-screen overflow-hidden p-4 mt-10 border rounded-lg">
        <Image
          src="/assets/Hero-section-Image.png"
          alt="Hero Image"
          fill
          className=""
          priority
        />
      </div>

      <div className="features-section mt-10">
        <p>Features Section</p>
        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          <div className="">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>

      <div className="FAQ">
      <p>FAQ Section</p>
        </div>
        <div className="Footer">
          <p>Footer</p>
        </div> 
      </div>
    </div>
  );
}
