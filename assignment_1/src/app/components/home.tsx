"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import shayan from "../public/shayan.png";
import resume from "../public/resume.png";
import timer from "../public/countdown.jpg";
import weather from "../public/weather_widget.jpg";
import calculator from "../public/calculator.png";

export default function Home() {
  return (
    <div className="min-h-screen  items-center justify-center p-4 backdrop-brightness-90 bg-inherit">
      <main className="flex flex-col flex-wrap items-center flex-1 p-5">
        <h1 className="text-6xl text-center mb-4 font-serif font-semibold">
          Welcome to Shayan's Website
        </h1>

        <div className="flex flex-cols-2 flex-wrap gap-4 mt-6 rounded shadow-2xl p-5 border-0  hover:bg-slate-900 hover:text-white ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 5 }}
          >
            <p className="w-64 font-serif ">
              My name is Muhammad Shayan Siddiqui. I am a passionate Full Stack
              Developer with a strong foundation in both front-end and back-end
              technologies,{" "}
            </p>
            <p className=" w-64 text-gray-400 font-light font-serif">
              driven by the excitement of solving real-world problems.....
            </p>
            <button className="rounded-full shadow-md mt-2 ml-8 bg-white text-black h-8 w-52 hover:bg-black hover:text-white hover:animate-pulse font-serif font-semibold">
              <Link href="/About">Learn More</Link>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={shayan}
              alt="Cat-Image"
              width={200}
              height={200}
              className="ml-8"
            />
          </motion.div>
        </div>
      </main>
      <h2 className="text-6xl mt-10 text-center font-serif font-bold underline">
        Projects
      </h2>
      <div className="flex flex-row flex-wrap justify-between ">
        <div className="flex flex-col basis-1/5  shadow-2xl mt-8 box-border items-center p-4 border-0 rounded-xl hover:bg-slate-950 hover:text-white ">
          <h1 className="mb-4 font-serif font-semibold text-xl text-blue-800">
            Resume Builder
          </h1>
          <Image
            src={resume}
            alt="resume-builder"
            width={200}
            height={200}
          ></Image>
          <p className="p-4 font-serif">
            This is a resume builder that generates your resume using...
          </p>
          <button className="rounded-full shadow-lg m-4 h-10 w-52 text-white bg-black hover:text-black hover:bg-white">
          <Link href="../Projects/Resume-Builder">Click to View</Link>
          </button>
        </div>
        <div className="flex flex-col  basis-1/5  shadow-2xl mt-8 box-border p-4  border-0 rounded-xl hover:bg-slate-950 hover:text-white items-center">
          <h1 className="mb-4 font-serif font-semibold text-xl text-blue-800">
            Countdown Timer
          </h1>
          <Image
            src={timer}
            alt="timer"
            width={190}
            height={190}
          ></Image>
          <p className="p-4 font-serif">
            This is a countdown timer counts times in secs,min and hours using...
          </p>
          <button className="rounded-full shadow-lg m-4 h-10 w-52 text-white bg-black hover:text-black hover:bg-white">
          <Link href="../Projects/countdown_timer">Click to view</Link>
          </button>
        </div>
        <div className="flex flex-col basis-1/5  shadow-2xl mt-8 box-border items-center p-4 border-0 rounded-xl hover:bg-slate-950 hover:text-white">
          <h1 className="mb-4 font-serif font-semibold text-xl text-blue-800">
            Weather Widget
          </h1>
          <Image
            src={weather}
            alt="resume-builder"
            width={210}
            height={210}
          ></Image>
          <p className="p-4 font-serif">
            This is a weather widget that tells you yhe current weather in your area using....
          </p>
          <button className="rounded-full shadow-lg m-4 h-10 w-52 text-white bg-black hover:text-black hover:bg-white">
          <Link href="../Projects/weather_widget">Click to view</Link>
          </button>
        </div>
        <div className=" flex flex-col basis-1/5  shadow-2xl mt-8 box-border items-center p-4 border-0 rounded-xl hover:bg-slate-950 hover:text-white">
          <h1 className="mb-4 font-serif font-semibold text-xl text-blue-800">
            Simple Calculator
          </h1>
          <Image
            src={calculator}
            alt="resume-builder"
            width={160}
            height={160}
          ></Image>
          <p className="p-4 font-serif">
            This is a simple calculator through which you can perform basic maths
          </p>
          <button className="rounded-full shadow-lg m-4 h-10 w-52 text-white bg-black hover:text-black hover:bg-white">
          <Link href="../Projects/simple_calculator">Click to View</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
