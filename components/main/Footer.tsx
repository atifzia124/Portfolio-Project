import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
        <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
          <div className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
            Contact Details
          </div>
          <p className="flex flex-row items-center my-[5px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">
              <span className="text-red-200">Phone:</span> (+91) 7019035584
            </span>
          </p>
          <p className="flex flex-row items-center my-[5px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">
              <span className="text-red-200">Email: </span>
              atifziaabdulnabi124@gmail.com
            </span>
          </p>
          <p className="flex flex-row items-center my-[5px] cursor-pointer">
            <span className="text-[15px] ml-[6px]">
              <span className="text-red-200">Location: </span>Kalaburgi,
              Industrial Area 5th phase, 585104, Karnataka
            </span>
          </p>
        </div>
      </div>
      <div className="mb-[16px] text-[15px] text-center">
        &copy; ATIF ZIA ABDUL NABI 2024 Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
