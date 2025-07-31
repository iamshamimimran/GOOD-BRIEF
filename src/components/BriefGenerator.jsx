import React, { useState, useMemo } from "react";
import {
  FaRocket,
  FaSpinner,
  FaCopy,
  FaDownload,
  FaIndustry,
  FaBriefcase,
} from "react-icons/fa";
import { marked } from "marked";
import { generateBrief } from "../api/gemini";

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

    if (!formData.industry || !formData.jobType) {
      setError("Please select both industry and job type");
      return;
    }

    setIsLoading(true);
    setError("");
    setGeneratedBrief("");

    try {
      const brief = await generateBrief(
        formData.industry,
        formData.jobType,
        `${formData.companyInfo} ${formData.additionalRequirements}`.trim()
      );
      setGeneratedBrief(brief);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedBrief);
    // Optionally show a toast here
  };

  const downloadBrief = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedBrief], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `business-brief-${formData.industry}-${formData.jobType}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // ✅ Memoize markdown conversion to avoid re-parsing on every render
  const formattedBriefHtml = useMemo(() => {
    return marked.parse(generatedBrief || "");
  }, [generatedBrief]);

  return (
    <section className="py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            AI-Powered <span>Business Brief Generator</span>
          </h2>
          <p className="text-xs italic text-gray-600 max-w-3xl mx-auto">
            Get a professional business brief tailored to your industry and
            project needs in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Industry */}
              <div>
                <label className=" text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <FaIndustry className="text-green-600" />
                  <span>Select Industry *</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
                  required
                >
                  <option value="">Choose your industry...</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                  <FaBriefcase className="text-green-600" />
                  <span>Select Job Type *</span>
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
                  required
                >
                  <option value="">Choose job type...</option>
                  {jobTypes.map((jobType) => (
                    <option key={jobType} value={jobType}>
                      {jobType}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Info */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Company Information (Optional)
                </label>
                <textarea
                  name="companyInfo"
                  value={formData.companyInfo}
                  onChange={handleInputChange}
                  placeholder="Brief description of your company, target audience, or specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                  rows="4"
                />
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  placeholder="Any specific features, timeline, budget constraints, or special requests..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                  rows="3"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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

          {/* Results Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Generated Brief
              </h3>
              {generatedBrief && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    <FaCopy />
                  </button>
                  <button
                    onClick={downloadBrief}
                    className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-lg transition-colors"
                    title="Download as text file"
                  >
                    <FaDownload />
                  </button>
                </div>
              )}
            </div>

            <div className="min-h-96">
              {isLoading ? (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600">
                      AI is crafting your perfect brief...
                    </p>
                  </div>
                </div>
              ) : generatedBrief ? (
                <div className="prose max-w-none">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div
                      className="prose max-w-none text-sm text-gray-800 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formattedBriefHtml }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 text-center">
                  <div className="text-gray-400">
                    <FaBriefcase className="text-4xl mx-auto mb-4" />
                    <p>Your AI-generated brief will appear here</p>
                    <p className="text-sm mt-2">
                      Fill out the form and click "Generate Brief" to get
                      started
                    </p>
                  </div>
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
