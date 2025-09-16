import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, DollarSign, Users, ExternalLink } from 'lucide-react';
import { mockScholarships } from '../data/mockData';

export default function ScholarshipsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const types = [...new Set(mockScholarships.map(scholarship => scholarship.type))];

  const filteredScholarships = useMemo(() => {
    return mockScholarships.filter(scholarship => {
      const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           scholarship.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || scholarship.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('');
  };

  const getDeadlineStatus = (lastDate: string) => {
    const deadline = new Date(lastDate);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return { status: 'expired', text: 'Expired', color: 'text-red-600 bg-red-100' };
    } else if (diffDays <= 7) {
      return { status: 'urgent', text: `${diffDays} days left`, color: 'text-orange-600 bg-orange-100' };
    } else if (diffDays <= 30) {
      return { status: 'soon', text: `${diffDays} days left`, color: 'text-yellow-600 bg-yellow-100' };
    } else {
      return { status: 'normal', text: `${diffDays} days left`, color: 'text-green-600 bg-green-100' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid</h1>
          <p className="text-gray-600">
            Find scholarships and financial assistance to support your educational journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 lg:w-auto w-full justify-center"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Scholarship Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="">All Types</option>
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-xl font-bold text-gray-900">₹50+ Lakhs</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Students Helped</p>
                <p className="text-xl font-bold text-gray-900">10,000+</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Active Scholarships</p>
                <p className="text-xl font-bold text-gray-900">{filteredScholarships.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredScholarships.length} Scholarship{filteredScholarships.length !== 1 ? 's' : ''} Available
          </h2>
        </div>

        {/* Scholarships List */}
        {filteredScholarships.length > 0 ? (
          <div className="space-y-6">
            {filteredScholarships.map((scholarship) => {
              const deadlineStatus = getDeadlineStatus(scholarship.lastDate);
              
              return (
                <div key={scholarship.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{scholarship.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${deadlineStatus.color}`}>
                          {deadlineStatus.text}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{scholarship.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Eligibility:</span>
                          <p className="text-sm text-gray-600">{scholarship.eligibility}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Amount:</span>
                          <p className="text-lg font-bold text-green-600">{scholarship.amount}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Deadline: {new Date(scholarship.lastDate).toLocaleDateString()}</span>
                        </div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {scholarship.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 lg:w-40">
                      <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <span>Apply Now</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Save for Later
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No scholarships found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find more results.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Finding Scholarships?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Our counselors can help you find and apply for scholarships that match your profile and financial needs.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Talk to Counselor
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors">
              Get Personal Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}