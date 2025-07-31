import React, { useState, useEffect } from "react";
import {
  FiTarget,
  FiZap,
  FiBook,
  FiAward,
  FiUsers,
  FiClock,
  FiBarChart2,
  FiCheckCircle,
} from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [animatedStats, setAnimatedStats] = useState({
    designers: 0,
    briefs: 0,
    industries: 0,
  });

  const targetStats = {
    designers: 15000,
    briefs: 3500,
    industries: 25,
  };

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) => ({
        designers:
          prev.designers < targetStats.designers
            ? Math.min(prev.designers + 150, targetStats.designers)
            : targetStats.designers,
        briefs:
          prev.briefs < targetStats.briefs
            ? Math.min(prev.briefs + 35, targetStats.briefs)
            : targetStats.briefs,
        industries:
          prev.industries < targetStats.industries
            ? Math.min(prev.industries + 1, targetStats.industries)
            : targetStats.industries,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          <h1 className="text-3xl md:text-4xl font-bold text-white ">
            About Betterbrief
          </h1>

          <p className="text-xl text-gray-300 max-w-7xl mx-auto">
            Helping designers practice and improve their skills with unique
            AI-generated briefs
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 mx-auto">
            {[
              {
                icon: <FiUsers className="text-3xl " />,
                value: animatedStats.designers.toLocaleString(),
                label: "Designers Empowered",
                color: "from-green-600 to-green-800",
              },
              {
                icon: <FiBook className="text-3xl " />,
                value: animatedStats.briefs.toLocaleString(),
                label: "Briefs Generated",
                color: "from-blue-600 to-blue-800",
              },
              {
                icon: <FiAward className="text-3xl" />,
                value: animatedStats.industries,
                label: "Industries Covered",
                color: "from-purple-600 to-purple-800",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex items-center mb-3">
                  {stat.icon}
                  <span className="text-3xl font-bold text-white ml-3">
                    {stat.value}+
                  </span>
                </div>
                <p className="text-gray-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-4 border-b border-gray-700">
          {[
            { id: "mission", label: "Our Mission", icon: <FiTarget /> },
            { id: "why", label: "Why It Matters", icon: <FiZap /> },
            { id: "how", label: "How It Works", icon: <FiBook /> },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center px-6 py-3 font-medium rounded-t-lg transition-colors ${
                activeTab === tab.id
                  ? "text-green-400 border-b-2 border-green-500 bg-gray-800"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl">
          {/* Mission Tab */}
          {activeTab === "mission" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Our Mission at Betterbrief
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Betterbrief was created to help designers of all levels
                  practice their craft with realistic, challenging briefs.
                  Whether you're a beginner looking to build your portfolio or
                  an experienced designer wanting to explore new industries, our
                  AI-powered brief generator provides endless inspiration.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We believe that consistent practice with diverse challenges is
                  the key to mastery in design. Our platform eliminates the
                  "blank canvas" problem and gives you a structured starting
                  point for your creative process.
                </p>
              </div>

              {/* Feature Box List */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Gradient Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-2xl blur-2xl opacity-40 animate-pulse z-0"></div>

                  <div className="relative z-10 bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-md">
                    <div className="flex flex-col space-y-5">
                      {[
                        {
                          icon: <FiTarget className="w-5 h-5 " />,
                          text: "Real-world challenges",
                          gradient: "from-green-500 to-emerald-400",
                        },
                        {
                          icon: <FiZap className="w-5 h-5 " />,
                          text: "Instant brief generation",
                          gradient: "from-blue-500 to-cyan-400",
                        },
                        {
                          icon: <FiAward className="w-5 h-5 " />,
                          text: "Portfolio building",
                          gradient: "from-purple-500 to-pink-400",
                        },
                        {
                          icon: <FiUsers className="w-5 h-5 " />,
                          text: "Community of designers",
                          gradient: "from-yellow-400 to-orange-400",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div
                            className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg mr-4`}
                          >
                            {item.icon}
                          </div>
                          <span className="text-gray-200 text-sm font-medium">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Why It Matters Tab */}
          {activeTab === "why" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
                Why Practice Briefs Matter
              </h2>
              <p className="text-gray-300 mb-12 text-center max-w-2xl mx-auto">
                Working on practice briefs helps you develop essential skills
                that translate directly to professional success:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Problem Solving",
                    description:
                      "Develop skills across different industries and contexts",
                    icon: <FaRegLightbulb className="w-5 h-5" />,
                    color: "from-yellow-400 to-green-400",
                  },
                  {
                    title: "Portfolio Building",
                    description:
                      "Create diverse, impressive work for your portfolio",
                    icon: <FiBook className="w-5 h-5" />,
                    color: "from-blue-500 to-cyan-400",
                  },
                  {
                    title: "Constraint Navigation",
                    description:
                      "Practice working within real-world limitations",
                    icon: <FiClock className="w-5 h-5" />,
                    color: "from-purple-500 to-indigo-400",
                  },
                  {
                    title: "Style Exploration",
                    description:
                      "Experiment with new design approaches and aesthetics",
                    icon: <FiAward className="w-5 h-5" />,
                    color: "from-pink-500 to-yellow-400",
                  },
                  {
                    title: "Client Preparation",
                    description:
                      "Prepare for real client work and expectations",
                    icon: <FiUsers className="w-5 h-5" />,
                    color: "from-red-500 to-orange-400",
                  },
                  {
                    title: "Skill Validation",
                    description:
                      "Measure your growth through tangible challenges",
                    icon: <FiBarChart2 className="w-5 h-5" />,
                    color: "from-indigo-400 to-blue-500",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-green-500/50"
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${benefit.color} text-white flex items-center justify-center shadow-md mr-4`}
                      >
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How It Works Tab */}
          {activeTab === "how" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-100 mb-2">
                How Betterbrief Works
              </h2>

              <div className="space-y-6 relative">
                {[
                  {
                    title: "AI-Powered Analysis",
                    description:
                      "Our AI analyzes thousands of real design briefs to generate unique, realistic challenges.",
                    icon: <FiZap className="w-6 h-6" />,
                  },
                  {
                    title: "Tailored Challenges",
                    description:
                      "Each brief is customized to specific industries and project types.",
                    icon: <FiTarget className="w-6 h-6" />,
                  },
                  {
                    title: "Comprehensive Briefs",
                    description:
                      "Every challenge includes company background, audience info, requirements and constraints.",
                    icon: <FiBook className="w-6 h-6" />,
                  },
                  {
                    title: "Clear Success Metrics",
                    description:
                      "You get defined success metrics and deliverables for each project.",
                    icon: <FiCheckCircle className="w-6 h-6" />,
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-xl shrink-0">
                      {step.icon}
                    </div>

                    {/* Card */}
                    <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 w-full md:w-2/3 transition hover:shadow-xl hover:border-green-500/50">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
