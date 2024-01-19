"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { WorkExperienceData } from "@/constants";

const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full h-full"
      id="experience"
    >
      <div className="flex flex-row w-auto h-auto relative justify-center items-center">
        <div className="relative w-auto h-auto top-0 z-[5]">
          <motion.div
            variants={slideInFromTop}
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
          >
            Work Experience
          </motion.div>
        </div>

        <div className="flex flex-col items-center px-10 justify-center translate-y-[-20px] relative z-[20] w-auto h-auto">
          <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={50}
              height={50}
              className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={70}
              height={70}
              className=" z-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center relative mx-4 px-8 top-50 z-[5]">
        <WorkExperience workExperience={WorkExperienceData} />
      </div>
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

interface WorkExperienceProps {
  workExperience: {
    company: string;
    location: string;
    position: string;
    duration: string;
    responsibilities?: string[];
  }[];
}

const WorkExperience: FC<WorkExperienceProps> = ({ workExperience }) => {
  return (
    <div className="text-[20px] text-gray-200 max-w-2xl mx-auto">
      {workExperience.map((experience, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold mb-2 text-blue-300">
            {experience.company}, {experience.location}
          </h3>
          <p className="italic text-red-300">{experience.position}</p>
          <p className="text-gray-600">{experience.duration}</p>
          {experience.responsibilities && (
            <ul className="list-disc pl-6 mt-4">
              {experience.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
