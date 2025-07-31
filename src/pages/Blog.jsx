import React, { useState } from "react";
import { FaCalendar, FaUser, FaArrowRight, FaSearch } from "react-icons/fa";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 Money-Saving Tips Every Senior Should Know",
      excerpt:
        "Discover practical ways to stretch your budget further with these senior-specific saving strategies.",
      author: "Sarah Johnson",
      date: "January 25, 2025",
      category: "Savings Tips",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Coupon Discovery",
      excerpt:
        "Learn how artificial intelligence is making it easier than ever to find the best deals and discounts.",
      author: "Michael Chen",
      date: "January 22, 2025",
      category: "Technology",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Using Technology Safely: A Senior's Guide",
      excerpt:
        "Essential tips for staying safe while enjoying the benefits of modern technology and apps.",
      author: "Emily Rodriguez",
      date: "January 20, 2025",
      category: "Safety",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "The Best Grocery Store Apps for Seniors",
      excerpt:
        "Compare the top grocery apps and find the ones that offer the best deals and easiest navigation.",
      author: "David Kim",
      date: "January 18, 2025",
      category: "App Reviews",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Building Better Shopping Habits in Your Golden Years",
      excerpt:
        "Transform your shopping routine with smart strategies that save both time and money.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      category: "Lifestyle",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Community Success Stories: Real Savings from Real Users",
      excerpt:
        "Read inspiring stories from our community members who have saved hundreds with our app.",
      author: "Community Team",
      date: "January 12, 2025",
      category: "Success Stories",
      readTime: "6 min read",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Savings Tips",
    "Technology",
    "Safety",
    "App Reviews",
    "Lifestyle",
    "Success Stories",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Tips, insights, and stories to help you make the most of your
            savings journey.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-200 h-64 lg:h-full"></div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-green-600 font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <FaUser />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCalendar />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 w-fit">
                    <span>Read Article</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "All" && !searchTerm
                ? regularPosts
                : filteredPosts
              ).map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-green-600 font-medium text-sm">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <FaUser />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaCalendar />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                        <span>Read</span>
                        <FaArrowRight className="text-sm" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <FaSearch className="text-4xl mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest savings tips, app updates, and exclusive deals
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
