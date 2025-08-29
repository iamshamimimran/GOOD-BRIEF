import React, { useState } from "react";
import {
  FaSpinner,
  FaRocket,
  FaCopy,
  FaDownload,
  FaFileAlt,
  FaMagic,
  FaEdit,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { toast } from "react-toastify";

const PromptImprover = () => {
  const [formData, setFormData] = useState({
    rawPrompt: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [improvedPrompt, setImprovedPrompt] = useState("");
  const [originalPrompt, setOriginalPrompt] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://better-brief-backend.onrender.com/improve-prompt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: formData.rawPrompt,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to improve prompt");
      }

      const data = await response.json();
      setImprovedPrompt(data.improvedPrompt);
      setOriginalPrompt(data.originalPrompt);
      toast.success("Prompt generated successfully! 🎉", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error: ${error}`, {
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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(improvedPrompt);

      toast.success("Prompt copied to clipboard! 📋", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const downloadPrompt = () => {
    const element = document.createElement("a");
    const file = new Blob([improvedPrompt], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "improved-prompt.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Prompt downloaded successfully! 📥", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <section className="py-2 min-h-screen bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center">
            <FaMagic className="text-3xl text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-white">
              AI Prompt Improver
            </h2>
          </div>
          <p className="text-gray-400 mt-3 max-w-5xl mx-auto">
            Transform your messy prompts into professional, clear, and effective
            AI instructions with spelling and grammar fixes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Form Section - Dark Theme */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Raw Prompt Input */}
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <FaEdit className="text-green-400" />
                  <span>Your Original Prompt *</span>
                </label>
                <textarea
                  name="rawPrompt"
                  value={formData.rawPrompt}
                  onChange={handleInputChange}
                  placeholder="Enter your prompt with any spelling mistakes, grammar errors, or unclear language. For example: 'write me a good articel about ai with speling mistaks and make it intresting for begginers'"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-200 resize-none"
                  rows="8"
                  required
                />
                <div className="mt-2 text-xs text-gray-400">
                  {formData.rawPrompt.length > 0 && (
                    <span className="flex items-center space-x-1">
                      <FaCheckCircle className="text-green-400" />
                      <span>{formData.rawPrompt.length} characters</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <div className="flex items-start space-x-2">
                  <FaExclamationTriangle className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-200 mb-1">
                      Tips for better results:
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Include your intent even if poorly written</li>
                      <li>• Don't worry about spelling or grammar</li>
                      <li>• Add context about what you want to achieve</li>
                      <li>• The AI will fix and enhance everything</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.rawPrompt.trim()}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg shadow-green-500/20"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    <span>Improving Prompt...</span>
                  </>
                ) : (
                  <>
                    <FaRocket />
                    <span>Improve My Prompt</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Section - Dark Theme */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl text-white">Improved Prompt</h3>

              {improvedPrompt && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 p-2 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    <FaCopy />
                  </button>
                  <button
                    onClick={downloadPrompt}
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
                    AI is polishing your prompt...
                  </p>
                </div>
              ) : improvedPrompt ? (
                <div className="bg-gray-700/50 rounded-lg border border-gray-600 h-full overflow-hidden">
                  <div className="h-full overflow-y-auto p-5 custom-scrollbar">
                    {/* Before/After Comparison */}
                    <div className="space-y-4">
                      {/* Original Prompt */}
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-red-400 mb-2 flex items-center space-x-1">
                          <FaExclamationTriangle className="text-xs" />
                          <span>Original (with issues):</span>
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {originalPrompt}
                        </p>
                      </div>

                      {/* Improved Prompt */}
                      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-green-400 mb-2 flex items-center space-x-1">
                          <FaCheckCircle className="text-xs" />
                          <span>Improved & Professional:</span>
                        </h4>
                        <p className="text-gray-200 leading-relaxed">
                          {improvedPrompt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-6 border-2 border-dashed border-gray-700 rounded-xl">
                  <div className="bg-gray-900 p-4 rounded-full mb-4">
                    <FaFileAlt className="text-3xl text-green-400" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-200">
                    Your Improved Prompt Awaits
                  </h4>
                  <p className="text-gray-400 mt-2 text-sm">
                    Enter your messy prompt and watch AI transform it into a
                    professional, clear instruction
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

export default PromptImprover;
