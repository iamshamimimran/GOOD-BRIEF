import React from "react";
import BriefGenerator from "../components/BriefGenerator";

const Generator = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="gradient-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Business Brief Generator</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Transform your project ideas into professional business briefs using
            the power of AI. Perfect for freelancers, agencies, and businesses
            looking to create comprehensive project documentation.
          </p>
        </div>
      </section>

      {/* Main Generator Component */}
      <BriefGenerator />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Use Our Brief Generator?
            </h2>
            <p className="text-xl text-gray-600">
              Save time and create professional documentation with AI assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Generate comprehensive briefs in seconds, not hours. Perfect for
                tight deadlines and quick turnarounds.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industry Specific
              </h3>
              <p className="text-gray-600">
                Tailored recommendations and requirements based on your specific
                industry and project type.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Quality
              </h3>
              <p className="text-gray-600">
                AI-powered content that meets professional standards and
                includes all essential project details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Generator;
