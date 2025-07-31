import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEye, FaMobile } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start <span className="text-green-400">Saving?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of seniors who are already saving money with our
              intelligent app. Explore our full catalogue of features and see
              how we can help you discover amazing deals every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <FaEye />
                <span>View Catalogue</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-colors flex items-center justify-center space-x-2">
                <FaMobile />
                <span>Download App</span>
              </button>
            </div>
          </div>
          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4">What You'll Get:</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                    <span>AI-powered deal discovery</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                    <span>Offline access to saved coupons</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                    <span>Senior-friendly interface</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
              <div className="text-3xl font-bold text-green-200">100% Free</div>
              <div className="text-green-100">No hidden fees, ever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
