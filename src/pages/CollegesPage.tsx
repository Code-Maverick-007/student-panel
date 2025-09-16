import React, { useState, useMemo } from 'react';
import { Search, Filter, X, MapPin } from 'lucide-react';
import CollegeCard from '../components/CollegeCard';
import CourseFilter from '../components/CourseFilter';
import StateFilter from '../components/StateFilter';
import ExamFilter from '../components/ExamFilter';
import EducationDetails from '../components/EducationDetails';
import { mockColleges } from '../data/mockData';
import { getAllCourses } from '../utils/collegeUtils';
import type { College } from '../types/college';

const colleges = mockColleges as College[];

export default function CollegesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [stateInput, setStateInput] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const [tenthMarks, setTenthMarks] = useState<number | ''>('');
  const [twelfthMarks, setTwelfthMarks] = useState<number | ''>('');
  const [stream, setStream] = useState('');
  
  const availableCourses = useMemo(() => getAllCourses(colleges), [colleges]);
  const availableStates = useMemo(() => 
    Array.from(new Set(colleges.map(c => c.state))).sort() as string[], 
    [colleges]
  );

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCourses = selectedCourses.length === 0 || 
        selectedCourses.some(course => college.courses.includes(course));
      
      const matchesState = selectedStates.length === 0 || 
        selectedStates.some(state => 
          college.state.toLowerCase().includes(state.toLowerCase())
        );
      
      const matchesExams = selectedExams.length === 0 ||
        selectedExams.some(exam => {
          const eligibility = college.examEligibility || {
            jee: false,
            mhtcet: false,
            direct: false
          };
          if (exam === 'jee') return eligibility.jee;
          if (exam === 'mhtcet') return eligibility.mhtcet;
          if (exam === 'direct') return eligibility.direct;
          return false;
        });
      
      const matchesEducation = 
        (tenthMarks === '' || 
         (college.cutoff[0] <= (tenthMarks as number) || 
          college.cutoff[1] <= (tenthMarks as number) ||
          college.cutoff[2] <= (tenthMarks as number))) &&
        (twelfthMarks === '' || 
         (college.cutoff[0] <= (twelfthMarks as number) || 
          college.cutoff[1] <= (twelfthMarks as number) ||
          college.cutoff[2] <= (twelfthMarks as number)));
      
      return matchesSearch && matchesCourses && matchesState && matchesExams && matchesEducation;
    });
  }, [searchQuery, selectedCourses, selectedStates, selectedExams, tenthMarks, twelfthMarks]);

  const handleCourseToggle = (course: string) => {
    setSelectedCourses(prev => 
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  const handleStateToggle = (state: string) => {
    setSelectedStates(prev => 
      prev.includes(state) ? prev.filter(s => s !== state) : [...prev, state]
    );
  };

  const handleExamToggle = (exam: string) => {
    setSelectedExams(prev => 
      prev.includes(exam) ? prev.filter(e => e !== exam) : [...prev, exam]
    );
  };

  const addStateFromInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (stateInput.trim() && !selectedStates.includes(stateInput.trim())) {
      setSelectedStates(prev => [...prev, stateInput.trim()]);
      setStateInput('');
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCourses([]);
    setSelectedStates([]);
    setSelectedExams([]);
    setTenthMarks('');
    setTwelfthMarks('');
    setStream('');
    setStateInput('');
  };

  const activeFilterCount = [
    searchQuery ? 1 : 0,
    selectedCourses.length,
    selectedStates.length,
    selectedExams.length,
    tenthMarks !== '' ? 1 : 0,
    twelfthMarks !== '' ? 1 : 0,
    stream ? 1 : 0
  ].reduce((a, b) => a + b, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="md:hidden flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Colleges</h1>
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {showMobileFilters ? (
            <X size={18} />
          ) : (
            <>
              <Filter size={18} />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="ml-1 bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                  {activeFilterCount}
                </span>
              )}
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block w-full md:w-1/4`}>
          <div className="bg-white p-4 rounded-lg shadow-sm md:sticky md:top-4 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Filters</h3>
              <button 
                onClick={clearAllFilters}
                className="text-sm text-blue-600 hover:text-blue-800 disabled:opacity-50"
                disabled={activeFilterCount === 0}
              >
                Clear all
              </button>
            </div>

            <div className="md:hidden">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search colleges..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">State</h3>
              <form onSubmit={addStateFromInput} className="flex gap-2 mb-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={stateInput}
                    onChange={(e) => setStateInput(e.target.value)}
                    placeholder="Enter state name"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    list="state-suggestions"
                  />
                  <datalist id="state-suggestions">
                    {availableStates.map((state) => (
                      <option key={state} value={state} />
                    ))}
                  </datalist>
                </div>
                <button 
                  type="submit" 
                  className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                >
                  Add
                </button>
              </form>
              
              {selectedStates.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedStates.map((state) => (
                    <span 
                      key={state}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {state}
                      <button 
                        onClick={() => handleStateToggle(state)}
                        className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-200 text-blue-600 hover:bg-blue-300"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <ExamFilter 
              selectedExams={selectedExams}
              onExamToggle={handleExamToggle}
            />

            <EducationDetails
              tenthMarks={tenthMarks}
              twelfthMarks={twelfthMarks}
              stream={stream}
              onTenthMarksChange={setTenthMarks}
              onTwelfthMarksChange={setTwelfthMarks}
              onStreamChange={setStream}
            />

            <CourseFilter 
              selectedCourses={selectedCourses}
              onCourseToggle={handleCourseToggle}
              availableCourses={availableCourses}
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="hidden md:flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Colleges</h1>
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {activeFilterCount > 0 && (
            <div className="mb-6 flex flex-wrap gap-2 items-center">
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Search: "{searchQuery}"
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              )}
              
              {selectedStates.map(state => (
                <span 
                  key={state} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  State: {state}
                  <button 
                    onClick={() => handleStateToggle(state)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    ×
                  </button>
                </span>
              ))}
              
              {selectedExams.map(exam => (
                <span 
                  key={exam}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >
                  {{
                    jee: 'JEE Main',
                    mhtcet: 'MH-CET',
                    direct: 'Direct Admission'
                  }[exam]}
                  <button 
                    onClick={() => handleExamToggle(exam)}
                    className="ml-2 text-green-500 hover:text-green-700"
                  >
                    ×
                  </button>
                </span>
              ))}
              
              {tenthMarks !== '' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  10th: {tenthMarks}%
                  <button 
                    onClick={() => setTenthMarks('')}
                    className="ml-2 text-amber-500 hover:text-amber-700"
                  >
                    ×
                  </button>
                </span>
              )}
              
              {twelfthMarks !== '' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  12th: {twelfthMarks}%
                  <button 
                    onClick={() => setTwelfthMarks('')}
                    className="ml-2 text-amber-500 hover:text-amber-700"
                  >
                    ×
                  </button>
                </span>
              )}
              
              {stream && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  {stream}
                  <button 
                    onClick={() => setStream('')}
                    className="ml-2 text-amber-500 hover:text-amber-700"
                  >
                    ×
                  </button>
                </span>
              )}
              
              <button
                onClick={clearAllFilters}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear all
              </button>
            </div>
          )}

          {filteredColleges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredColleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-4">No colleges found matching your filters.</p>
              <button
                onClick={clearAllFilters}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}