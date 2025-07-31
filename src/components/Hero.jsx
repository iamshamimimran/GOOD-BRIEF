import React from "react";
import { FaMobile, FaRobot, FaStar, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="gradient-green text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Smart Savings,
              <br />
              <span className="text-green-200">Simplified</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Discover amazing discounts and coupons with our AI-powered app.
              Designed for seniors, our friendly interface makes saving money
              exciting and effortless, even when you're offline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <FaDownload />
                <span>Download Now</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
            <div className="flex items-center space-x-6 text-green-100">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-300" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMobile />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRobot />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
          <Link
            to="/generator"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            Try Brief Generator
          </Link>
          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-white rounded-xl p-6 text-gray-900 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FaRobot className="text-green-600" />
                  </div>
                  <span className="font-semibold">AI Assistant</span>
                </div>
                <p className="text-gray-600">
                  "I found 3 great deals near you! Your favorite grocery store
                  has 25% off produce today."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-green-200">Happy Users</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">$2M+</div>
                  <div className="text-sm text-green-200">Saved Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
