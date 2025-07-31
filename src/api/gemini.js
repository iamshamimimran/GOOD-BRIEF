import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize with API key from environment variable
const genAI = new GoogleGenerativeAI("AIzaSyCq-vREiIZioED3dBSM1EtreBRFgA0ihoU");

export const generateBrief = async (industry, jobType, companyInfo) => {
  try {
    const prompt = `
Create a detailed business brief for a company in the ${industry} industry that needs ${jobType} services.

Company Information:
- Industry: ${industry}
- Job Type: ${jobType}
- Additional Context: ${companyInfo || "Standard business requirements"}

Please provide:
1. Company name suggestion
2. Company description (2-3 sentences)
3. Detailed job requirements and objectives
4. Target audience analysis
5. Key deliverables and timeline
6. Specific recommendations for the ${jobType}

Format the response as a professional business brief that could be used by service providers to understand the client's needs.
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const response = result.response;
    return response.text(); // Returns the generated brief
  } catch (error) {
    console.error("Error generating brief:", error);
    throw new Error("Failed to generate brief. Please try again.");
  }
};
