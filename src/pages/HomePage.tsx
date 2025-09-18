import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, GraduationCap, Briefcase, Bot, Target } from 'lucide-react';
import CollegeCard from '../components/CollegeCard';
import { mockColleges } from '../data/mockData';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredColleges = mockColleges.slice(0, 3);

  const quickActions = [
    {
      title: 'Find Colleges',
      description: 'Discover the best colleges for your career',
      icon: GraduationCap,
      path: '/colleges',
      color: 'bg-blue-500'
    },
    {
      title: 'Explore Careers',
      description: 'Find your perfect career path',
      icon: Briefcase,
      path: '/career-explorer',
      color: 'bg-green-500'
    },
    {
      title: 'AI Advisor',
      description: 'Get personalized guidance from AI',
      icon: Bot,
      path: '/ai-advisor',
      color: 'bg-purple-500'
    },
    {
      title: 'Take Quiz',
      description: 'Discover your aptitude and interests',
      icon: Target,
      path: '/quiz',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Discover Your Career Path with
              <span className="block text-yellow-300">AI + Counselors!</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              Get personalized guidance for colleges, careers, and scholarships with our AI-powered platform
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for colleges, courses, careers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg text-gray-800 rounded-lg border-0 focus:ring-4 focus:ring-blue-300 outline-none"
                />
              </div>
            </div>
            
            <Link
              to="/colleges"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-800 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {action.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Colleges */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Colleges
            </h2>
            <Link
              to="/colleges"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students who have found their perfect career path with CareerGuide
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/counselors"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Talk to a Counselor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}