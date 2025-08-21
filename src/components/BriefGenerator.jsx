import React, { useState, useMemo } from "react";
import {
  FaRocket,
  FaSpinner,
  FaCopy,
  FaDownload,
  FaIndustry,
  FaBriefcase,
  FaRobot,
  FaBuilding,
  FaClipboardList,
  FaFileAlt,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { marked } from "marked";
import { toast } from "react-toastify";
import BriefQualityAnalyzer from "./BriefQualityAnalyzer";

const BriefGenerator = () => {
  const [formData, setFormData] = useState({
    industry: "",
    jobType: "",
    companyInfo: "",
    additionalRequirements: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState("");
  const [error, setError] = useState("");

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Real Estate",
    "Food & Beverage",
    "Automotive",
    "Entertainment",
    "Travel & Tourism",
    "Energy",
    "Legal Services",
    "Marketing & Advertising",
    "Construction",
    "Fashion",
    "Sports",
    "Non-Profit",
    "Government",
    "Agriculture",
  ];

  const jobTypes = [
    "Website Development",
    "Mobile App",
    "Logo Design",
    "Brand Identity",
    "Marketing Campaign",
    "SEO Optimization",
    "Social Media Management",
    "Content Writing",
    "Video Production",
    "Graphic Design",
    "UI/UX Design",
    "E-commerce Setup",
    "Database Development",
    "Cloud Migration",
    "Cybersecurity Audit",
    "Business Consulting",
    "Market Research",
    "Product Photography",
    "Copywriting",
    "Email Marketing",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { industry, jobType, companyInfo, additionalRequirements } = formData;

    // Validate required fields
    if (!industry || !jobType) {
      setError("Please select both industry and job type.");
      toast.error("Please select both industry and job type.");
      return;
    }

    // Prepare full context
    const fullContext = [companyInfo, additionalRequirements]
      .filter(Boolean)
      .join(" ")
      .trim();

    // Reset state before request
    setIsLoading(true);
    setError("");
    setGeneratedBrief("");

    try {
      const response = await fetch(
        "https://better-brief-backend.onrender.com/generate-brief",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            industry,
            jobType,
            companyInfo: fullContext,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Check if it's an overload error (503 status)
        if (response.status === 503 || data.error?.includes("overloaded")) {
          const overloadMessage =
            "🚀 AI model is experiencing high demand! Please try again in a few moments.";
          setError(overloadMessage);
          toast.error(overloadMessage, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon: <FaExclamationTriangle className="text-orange-500" />,
          });
        } else {
          throw new Error(data.error || "Something went wrong.");
        }
        return;
      }

      setGeneratedBrief(data.brief);
      toast.success("Brief generated successfully! 🎉", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      const errorMessage = err.message || "An unexpected error occurred.";
      setError(errorMessage);
      toast.error(`Error: ${errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedBrief);
    toast.success("Brief copied to clipboard! 📋", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const downloadBrief = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedBrief], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `business-brief-${formData.industry}-${formData.jobType}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    toast.success("Brief downloaded successfully! 📥", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // ✅ Memoize markdown conversion to avoid re-parsing on every render
  const formattedBriefHtml = useMemo(() => {
    return marked.parse(generatedBrief || "");
  }, [generatedBrief]);

  return (
    <section className="py-2 min-h-screen bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center">
            <FaRobot className="text-3xl text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-white">
              AI-Powered Brief Generator
            </h2>
          </div>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
            Get a professional brief tailored to your industry and project needs
            in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Form Section - Dark Theme */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Industry */}
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <FaIndustry className="text-green-400" />
                  <span>Select Industry *</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-200"
                  required
                >
                  <option value="" className="text-gray-400">
                    Choose your industry...
                  </option>
                  {industries.map((industry) => (
                    <option
                      key={industry}
                      value={industry}
                      className="text-gray-200 bg-gray-800"
                    >
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Type */}
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <FaBriefcase className="text-green-400" />
                  <span>Select Job Type *</span>
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-200"
                  required
                >
                  <option value="" className="text-gray-400">
                    Choose job type...
                  </option>
                  {jobTypes.map((jobType) => (
                    <option
                      key={jobType}
                      value={jobType}
                      className="text-gray-200 bg-gray-800"
                    >
                      {jobType}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Info */}
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <FaBuilding className="text-green-400" />
                  <span>Company Information (Optional)</span>
                </label>
                <textarea
                  name="companyInfo"
                  value={formData.companyInfo}
                  onChange={handleInputChange}
                  placeholder="Brief description of your company, target audience, or specific requirements..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-200 resize-none"
                  rows="3"
                />
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <FaClipboardList className="text-green-400" />
                  <span>Additional Requirements (Optional)</span>
                </label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  placeholder="Any specific features, timeline, budget constraints, or special requests..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-200 resize-none"
                  rows="2"
                />
              </div>
              <BriefQualityAnalyzer formData={formData} />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg shadow-green-500/20"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Generating Brief...</span>
                  </>
                ) : (
                  <>
                    <FaRocket />
                    <span>Generate Brief</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Section - Dark Theme */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl text-white">Generated Brief</h3>

              {generatedBrief && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 p-2 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    <FaCopy />
                  </button>
                  <button
                    onClick={downloadBrief}
                    className="bg-gradient-to-r from-green-700 to-blue-700 text-gray-100 p-2 rounded-lg hover:opacity-90 transition-opacity"
                    title="Download as text file"
                  >
                    <FaDownload />
                  </button>
                </div>
              )}
            </div>

            {/* Result Content */}
            <div className="h-[480px] relative">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
                    <FaSpinner className="animate-spin text-4xl text-green-400 relative z-10" />
                  </div>
                  <p className="text-gray-400 mt-4">
                    AI is crafting your perfect brief...
                  </p>
                </div>
              ) : generatedBrief ? (
                <div className="bg-gray-700/50 rounded-lg border border-gray-600 h-full overflow-hidden">
                  <div className="h-full overflow-y-auto p-5 custom-scrollbar">
                    <div
                      className="text-gray-300 leading-relaxed prose prose-invert"
                      dangerouslySetInnerHTML={{ __html: formattedBriefHtml }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-6 border-2 border-dashed border-gray-700 rounded-xl">
                  <div className="bg-gray-900 p-4 rounded-full mb-4">
                    <FaFileAlt className="text-3xl text-green-400" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-200">
                    Your Brief Awaits
                  </h4>
                  <p className="text-gray-400 mt-2 text-sm">
                    Fill out the form and generate a professional brief tailored
                    to your needs
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefGenerator;
