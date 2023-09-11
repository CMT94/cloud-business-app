import React from "react";

import CyberImg from "../assets/cyber-bg.png";

import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
  LightningBoltIcon,
} from "@heroicons/react/solid";

import Button from "./shared/Button";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our tech solution.</p>
          <Button
            type="solid"
            customClass="my-4 flex justify-center items-center"
          >
            <span className="mr-2">Get Started</span>
            <LightningBoltIcon className="w-[18px]" />
          </Button>
        </div>

        <div>
          <img src={CyberImg} alt="Cyber" className="w-full" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <div className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className="w-[20px] text-indigo-600" />
              <p>App Security</p>
            </div>
            <div className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="w-[20px] text-indigo-600" />
              <p>Dashboard Design</p>
            </div>
            <div className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="w-[20px] text-indigo-600" />
              <p>Cloud Data</p>
            </div>
            <div className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="w-[20px] text-indigo-600" />
              <p>API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
