import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Goodbrief
          </h1>
          <p className="text-xl text-gray-600">
            Helping designers practice and improve their skills with unique
            briefs.
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>
            Goodbrief was created to help designers of all levels practice their
            craft with realistic, challenging briefs. Whether you're a beginner
            looking to build your portfolio or an experienced designer wanting
            to explore new industries, our AI-powered brief generator provides
            endless inspiration.
          </p>

          <h2>Why Practice Briefs Matter</h2>
          <p>Working on practice briefs helps you:</p>
          <ul>
            <li>Develop problem-solving skills across different industries</li>
            <li>Build a diverse portfolio</li>
            <li>Practice working within constraints</li>
            <li>Explore new design styles and approaches</li>
            <li>Prepare for real client work</li>
          </ul>

          <h2>How It Works</h2>
          <p>
            Our AI analyzes thousands of real design briefs to generate unique,
            realistic challenges tailored to specific industries and project
            types. Each brief includes:
          </p>
          <ul>
            <li>Company background and context</li>
            <li>Target audience information</li>
            <li>Project requirements and constraints</li>
            <li>Success metrics and deliverables</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
