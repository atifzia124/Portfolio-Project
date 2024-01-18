import React from "react";
import { CertificationsData } from "@/constants";
import CertificationCard from "../sub/CertificationCard";

const Certifications = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Certifications"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certifications
      </h1>
      <div className="h-full w-full grid grid-flow-col md:grid-flow-row md:grid-cols-3 gap-6 px-6">
        {CertificationsData.map((Certification) => {
          return (
            <CertificationCard
              key={Certification.title}
              title={Certification.title}
              author={Certification.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
