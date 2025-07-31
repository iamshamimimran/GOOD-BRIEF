import React from "react";
import {
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaHandHoldingHeart,
  FaLeaf,
} from "react-icons/fa";

const OurValues = () => {
  const values = [
    {
      icon: <FaHeart className="text-3xl text-green-600" />,
      title: "Genuine Care",
      description:
        "We genuinely care about helping seniors save money and live better lives. Every feature is designed with empathy and understanding.",
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Community First",
      description:
        "Building a supportive community where everyone feels valued and included, regardless of their technical experience.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-green-600" />,
      title: "Trust & Security",
      description:
        "Your privacy and security are paramount. We maintain the highest standards to protect your personal information.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-green-600" />,
      title: "Innovation with Purpose",
      description:
        "We harness cutting-edge AI technology to create meaningful solutions that truly improve daily life.",
    },
    {
      icon: <FaHandHoldingHeart className="text-3xl text-green-600" />,
      title: "Accessibility",
      description:
        "Technology should be for everyone. We design with accessibility in mind, ensuring our app is easy to use for all.",
    },
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: "Sustainable Impact",
      description:
        "We believe in creating positive change that lasts, both for our users and the communities they live in.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything we do is guided by our core values. They shape how we
            build our products, serve our community, and create meaningful
            connections with our users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
