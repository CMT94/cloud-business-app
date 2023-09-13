import React from "react";

import { CheckIcon } from "@heroicons/react/solid";

import Button from "./../components/shared/Button";

const solutions = [
  {
    id: "s1",
    type: "standard",
    price: 49,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    features: [
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem, ipsum dolor.",
    ],
  },
  {
    id: "s2",
    type: "entreprise",
    price: 89,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    features: [
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit",
      "Lorem, ipsum dolor.",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your research.
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio
            sit veritatis aperiam non illum ut modi laboriosam impedit magnam.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {solutions.map((solution, solutionIndex) => (
            <div
              key={solutionIndex}
              className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative"
            >
              <span
                className={`uppercase px-3 py-1 rounded-2xl text-sm ${
                  solutionIndex === 0
                    ? "bg-indigo-200 text-indigo-900"
                    : "bg-violet-200 text-violet-900"
                }`}
              >
                {solution.type}
              </span>
              <div>
                <p className="text-6xl font-bold py-4 flex">
                  ${solution.price}
                  <span className="text-xl text-slate-500 flex flex-col justify-end">
                    /mo
                  </span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">
                {solution.description}
              </p>
              <div className="text-xl">
                {solution.features.map((feature, featureIndex) => (
                  <p key={featureIndex} className="flex py-4 items-center">
                    <CheckIcon className="w-7 mr-5 text-green-600" />{" "}
                    <span>{feature}</span>
                  </p>
                ))}
                <Button
                  type="solid"
                  customClass="w-full my-4 hover:transition duration-300 ease-in-out"
                >
                  Start Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
