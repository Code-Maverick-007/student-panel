import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { careerFlowcharts } from '../data/mockData';

export default function CareerExplorerPage() {
  const careerStats = [
    { label: 'Career Paths', value: '50+', icon: TrendingUp, color: 'bg-blue-500' },
    { label: 'Industry Sectors', value: '15+', icon: Users, color: 'bg-green-500' },
    { label: 'Avg. Salary Range', value: '₹5-25 LPA', icon: DollarSign, color: 'bg-purple-500' },
    { label: 'Success Rate', value: '85%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Career Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover various career paths and understand the journey from your current education to your dream job
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {careerStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3 mr-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course to Career Flowcharts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Course to Career Flowcharts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerFlowcharts.map((flowchart) => (
              <div key={flowchart.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={flowchart.image}
                  alt={flowchart.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {flowchart.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {flowchart.description}
                  </p>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <span>View Flowchart</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Career Paths */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Popular Career Paths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Software Engineering',
                education: 'BTech/BCA → MTech/MCA',
                salary: '₹8-30 LPA',
                growth: 'High',
                skills: ['Programming', 'Problem Solving', 'System Design']
              },
              {
                title: 'Data Science',
                education: 'BTech/BSc → MS/PhD',
                salary: '₹10-40 LPA',
                growth: 'Very High',
                skills: ['Statistics', 'Machine Learning', 'Python']
              },
              {
                title: 'Digital Marketing',
                education: 'Any Graduate → Certification',
                salary: '₹5-20 LPA',
                growth: 'High',
                skills: ['SEO/SEM', 'Analytics', 'Content Strategy']
              },
              {
                title: 'Product Management',
                education: 'BTech/MBA',
                salary: '₹15-50 LPA',
                growth: 'Very High',
                skills: ['Strategy', 'Analytics', 'Leadership']
              },
              {
                title: 'UI/UX Design',
                education: 'Design Degree → Portfolio',
                salary: '₹6-25 LPA',
                growth: 'High',
                skills: ['Design Tools', 'User Research', 'Prototyping']
              },
              {
                title: 'Financial Analyst',
                education: 'B.Com/BBA → MBA/CFA',
                salary: '₹7-25 LPA',
                growth: 'Medium',
                skills: ['Financial Modeling', 'Excel', 'Analysis']
              }
            ].map((career, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{career.title}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Education Path:</span>
                    <span className="font-medium">{career.education}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Salary Range:</span>
                    <span className="font-medium text-green-600">{career.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth Potential:</span>
                    <span className={`font-medium ${
                      career.growth === 'Very High' ? 'text-green-600' :
                      career.growth === 'High' ? 'text-blue-600' : 'text-orange-600'
                    }`}>
                      {career.growth}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="text-sm text-gray-600">Key Skills:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {career.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Not Sure Which Career Path to Choose?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Take our comprehensive aptitude quiz or talk to our AI advisor to get personalized career recommendations based on your interests and skills.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Take Aptitude Quiz
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Talk to AI Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}