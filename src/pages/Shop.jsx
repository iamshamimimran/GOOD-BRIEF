import React, { useState } from "react";
import {
  FaDownload,
  FaMobile,
  FaTabletAlt,
  FaDesktop,
  FaStar,
  FaCheck,
} from "react-icons/fa";

const Shop = () => {
  const [selectedPlan, setSelectedPlan] = useState("free");

  const features = [
    "AI-powered deal discovery",
    "Offline coupon access",
    "Senior-friendly interface",
    "Personalized recommendations",
    "Store locator",
    "Price comparison",
    "Wishlist management",
    "Deal notifications",
  ];

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Basic deal discovery",
        "Up to 10 saved coupons",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: "$4.99",
      period: "per month",
      description: "Most popular choice",
      features: [
        "Advanced AI recommendations",
        "Unlimited saved coupons",
        "Priority support",
        "All device access",
        "Exclusive deals",
        "Price drop alerts",
      ],
      popular: true,
    },
    {
      id: "family",
      name: "Family",
      price: "$9.99",
      period: "per month",
      description: "Share with up to 5 family members",
      features: [
        "Everything in Premium",
        "Up to 5 family accounts",
        "Shared shopping lists",
        "Family deal sharing",
        "Bulk purchase discounts",
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Choose Your Plan</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Start saving money today with our AI-powered app. Choose the plan
            that works best for you.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <FaMobile className="text-green-200" />
              <span>iOS & Android</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <FaStar className="text-yellow-300" />
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to{" "}
              <span className="text-gradient">Save More</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our app is packed with features designed specifically for seniors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-green-600" />
                </div>
                <p className="font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 relative ${
                  plan.popular
                    ? "bg-green-50 border-2 border-green-500 shadow-lg"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.id === "free" ? "Download Free" : "Start Free Trial"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Saving?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download our app today and join thousands of seniors who are already
            saving money with AI-powered deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-3">
              <FaMobile className="text-xl" />
              <div className="text-left">
                <div className="text-sm">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-3">
              <FaMobile className="text-xl" />
              <div className="text-left">
                <div className="text-sm">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
