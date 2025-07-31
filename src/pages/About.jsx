import React from "react";
import { FaUsers, FaRocket, FaHeart, FaAward } from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "$2M+", label: "Money Saved" },
    { number: "500+", label: "Partner Stores" },
    { number: "4.8/5", label: "App Rating" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former tech executive passionate about making technology accessible to seniors.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI expert with 15 years of experience building consumer-friendly applications.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of UX",
      bio: "Specializes in designing intuitive interfaces for older adults.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Western Envelope Software
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            We're on a mission to make smart savings accessible and exciting for
            seniors everywhere.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Western Envelope Software was born from a simple observation:
                while technology was advancing rapidly, many seniors were being
                left behind when it came to accessing digital savings and
                discounts.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, Sarah Johnson, watched her grandmother struggle
                with complicated coupon apps and decided there had to be a
                better way. We set out to create an app that combines the power
                of artificial intelligence with a genuinely friendly, accessible
                interface.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve over 50,000 seniors across the
                country, helping them save money while staying connected to
                their communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <FaHeart className="text-3xl text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-gray-600">
                    Making savings accessible for everyone
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We believe that everyone deserves access to great deals and
                discounts, regardless of their comfort level with technology.
                Our mission is to bridge that gap with empathy, innovation, and
                genuine care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate people dedicated to making a difference
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
