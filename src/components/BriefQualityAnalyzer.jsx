const BriefQualityAnalyzer = ({ formData }) => {
  let score = 0;
  if (formData.industry) score += 25;
  if (formData.jobType) score += 25;
  if (formData.companyInfo?.length > 10) score += 25;
  if (formData.additionalRequirements?.length > 10) score += 25;

  const missingFields = [];
  if (!formData.companyInfo || formData.companyInfo.length <= 10)
    missingFields.push("Company Info");
  if (
    !formData.additionalRequirements ||
    formData.additionalRequirements.length <= 10
  )
    missingFields.push("Additional Requirements");

  return (
    <div className="my-4 p-4 rounded-lg bg-gray-700 border border-gray-600">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-xs text-green-300">
          Brief Quality
        </span>
        <span className="text-lg font-bold text-white">{score}%</span>
      </div>
      <div className="h-2 w-full rounded bg-gray-600 mb-2">
        <div
          className="h-2 rounded bg-gradient-to-r from-green-400 to-blue-500 transition-all"
          style={{ width: `${score}%` }}
        />
      </div>
      {missingFields.length > 0 && (
        <div className="text-xs text-gray-400">
          Try adding more detail to: {missingFields.join(", ")}
        </div>
      )}
    </div>
  );
};

export default BriefQualityAnalyzer;
