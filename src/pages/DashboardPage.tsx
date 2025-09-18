import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, BookOpen, Users, TrendingUp, Calendar, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';
import CollegeCard from '../components/CollegeCard';

export default function DashboardPage() {
  const { state } = useApp();

  if (!state.isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Please Login</h1>
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const stats = [
    { label: 'Saved Colleges', value: state.savedColleges.length, icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Connected Counselors', value: state.connectedCounselors.length, icon: Users, color: 'bg-green-500' },
    { label: 'Quiz Progress', value: `${Math.round((state.quizProgress.currentQuestion / state.quizProgress.totalQuestions) * 100)}%`, icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Achievements', value: '3', icon: Award, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {state.user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's your career guidance journey overview
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={state.user?.photo || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150'}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">{state.user?.name}</h2>
              <p className="text-gray-600">{state.user?.email}</p>
              <p className="text-gray-600">{state.user?.phone}</p>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Edit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Saved Colleges */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Saved Colleges</h3>
              <Link to="/colleges" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </Link>
            </div>
            
            {state.savedColleges.length > 0 ? (
              <div className="space-y-3">
                {state.savedColleges.slice(0, 3).map((college) => (
                  <div key={college.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{college.name}</h4>
                      <p className="text-gray-600 text-xs">{college.location}</p>
                    </div>
                    <Link
                      to={`/college/${college.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      View
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No saved colleges yet</p>
                <Link
                  to="/colleges"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                >
                  Browse Colleges
                </Link>
              </div>
            )}
          </div>

          {/* Connected Counselors */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Connected Counselors</h3>
              <Link to="/counselors" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </Link>
            </div>
            
            {state.connectedCounselors.length > 0 ? (
              <div className="space-y-3">
                {state.connectedCounselors.slice(0, 3).map((counselor) => (
                  <div key={counselor.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <img
                      src={counselor.photo}
                      alt={counselor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{counselor.name}</h4>
                      <p className="text-gray-600 text-xs">{counselor.specialization}</p>
                    </div>
                    <button className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {counselor.availability}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No connected counselors yet</p>
                <Link
                  to="/counselors"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                >
                  Find Counselors
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mt-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">AI-Powered Recommendations</h3>
              <p className="text-purple-100">
                Get personalized college and career suggestions based on your profile and interests
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link
                to="/ai-advisor"
                className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Talk to AI Advisor
              </Link>
              <Link
                to="/quiz"
                className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Take Aptitude Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
