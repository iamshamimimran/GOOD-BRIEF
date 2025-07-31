import React from "react";
import { BiBulb } from "react-icons/bi";
import { FiSearch, FiTarget, FiBox, FiLayers, FiUsers } from "react-icons/fi";

const Tips = () => {
  const tips = [
    {
      title: "Start with Research",
      content:
        "Before jumping into design, spend time understanding the industry, target audience, and competitive landscape.",
      icon: <FiSearch className="text-2xl text-purple-400" />,
    },
    {
      title: "Define the Problem Clearly",
      content:
        "Make sure you understand exactly what problem you're solving before proposing solutions.",
      icon: <FiTarget className="text-2xl text-blue-400" />,
    },
    {
      title: "Embrace Constraints",
      content:
        "Constraints breed creativity. Use budget, timeline, and technical limitations as creative catalysts.",
      icon: <FiBox className="text-2xl text-green-400" />,
    },
    {
      title: "Think Beyond Aesthetics",
      content:
        "Great design solves problems, not just looks pretty. Focus on functionality and user experience.",
      icon: <FiLayers className="text-2xl text-yellow-400" />,
    },
    {
      title: "Iterate and Refine",
      content:
        "Your first idea is rarely your best. Create multiple concepts and refine the strongest ones.",
      icon: <BiBulb className="text-2xl text-red-400" />,
    },
    {
      title: "Get Feedback Early",
      content:
        "Share your work in progress with others to catch issues and improve your designs.",
      icon: <FiUsers className="text-2xl text-indigo-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BiBulb className="text-4xl text-yellow-400 mr-3" />
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Design Tips & Resources
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Practical advice to improve your design process and skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 rounded-lg bg-gray-700 mr-4">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mt-1">
                  {tip.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed pl-14">
                {tip.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
