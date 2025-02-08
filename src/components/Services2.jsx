import React from 'react';

export default function Services2() {
  return (
    <>
      <hr className="bg-purple-700 text-purple-600 hidden md:block" />
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#233066] to-[#3e1f59] p-4 py-64">
        <h1 className="text-white text-4xl md:text-8xl font-oswald mb-14 text-center">
          COMPENSATION AND BENEFITS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11 mt-14 w-full max-w-7xl">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 shadow-lg text-center">
              <h2 className="text-pink-500 font-oswald text-3xl mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 text-lg">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const sections = [
  {
    title: "Intelligent Automation",
    content:
      "Tatweer-505 reduces manual work by automating repetitive tasks, from inventory management to financial tracking. By minimizing human intervention, businesses can improve efficiency, reduce errors, and free up resources for strategic growth.",
  },
  {
    title: "Data-Driven Decision Making",
    content:
      "In today’s fast-paced business world, real-time insights are crucial. Tatweer-505 collects, processes, and analyzes business data, transforming it into actionable recommendations. This ensures that leaders can make smart, informed decisions backed by AI-driven analytics.",
  },
  {
    title: "Seamless Integration & Adaptability",
    content:
      "Every business has its own structure and workflows. Tatweer-505 is designed to integrate smoothly with existing systems, adapting to unique operational needs. Whether you're managing sales, supply chains, or HR, our AI assistant enhances productivity without disrupting current processes.",
  },
];