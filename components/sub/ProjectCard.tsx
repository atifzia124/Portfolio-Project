import Image from "next/image";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
interface Props {
  src: string;
  title: string;
  description: string;
  github: string;
  live: string;
}

const ProjectCard = ({ src, title, description, github, live }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <div className="mt-4 flex gap-x-4 justify-between">
          <a className="text-2xl font-semibold text-purple-200 cursor-pointer">
            {title}
          </a>
          <div className="flex gap-4">
            <a href={live} target="_blank">
              <TbWorldWww className="h-8 w-8 text-slate-300 hover:text-blue-300 duration-300 cursor-pointer" />
            </a>
            <a href={github} target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-300 hover:text-green-300 duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
