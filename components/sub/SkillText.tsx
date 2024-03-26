"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { SkillsData } from "@/constants";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Making apps with modern technologies
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5"
      >
        Technical Skills
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[20px] text-gray-200 mb-10 mt-[10px]"
      >
        {SkillsData.map((categoryItem, index) => (
          <div key={index}>
            <span className="text-blue-300">{categoryItem.category} : </span>
            <span className="text-[16px]">{categoryItem.items.join(", ")}</span>
          </div>
        ))}
        <p className="text-center p-2">DSA and System Design</p>
      </motion.div>
    </div>
  );
};

export default SkillText;
