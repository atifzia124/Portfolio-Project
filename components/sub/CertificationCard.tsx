import React from "react";

interface Props {
  title: string;
  author: string;
}

const CertificationCard = ({ title, author }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white ">{title}</h1>
        <p className="mt-2 text-gray-300">{author}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
