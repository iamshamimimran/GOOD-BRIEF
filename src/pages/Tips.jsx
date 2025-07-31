import React from "react";

const Tips = () => {
  const tips = [
    {
      title: "Start with Research",
      content:
        "Before jumping into design, spend time understanding the industry, target audience, and competitive landscape.",
    },
    {
      title: "Define the Problem Clearly",
      content:
        "Make sure you understand exactly what problem you're solving before proposing solutions.",
    },
    {
      title: "Embrace Constraints",
      content:
        "Constraints breed creativity. Use budget, timeline, and technical limitations as creative catalysts.",
    },
    {
      title: "Think Beyond Aesthetics",
      content:
        "Great design solves problems, not just looks pretty. Focus on functionality and user experience.",
    },
    {
      title: "Iterate and Refine",
      content:
        "Your first idea is rarely your best. Create multiple concepts and refine the strongest ones.",
    },
    {
      title: "Get Feedback Early",
      content:
        "Share your work in progress with others to catch issues and improve your designs.",
    },
  ];

  return (
    <div className="min-h-screen  bg-white">
      <div className="max-w-4xl mx-auto px-4 py-2">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Design Tips & Resources
          </h1>
          <p className="text-xl text-gray-600">
            Practical advice to improve your design process and skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
