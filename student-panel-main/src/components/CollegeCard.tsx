import { useApp } from '../context/AppContext';
import { Bookmark, MapPin, Star } from 'lucide-react';
import type { College } from '../types/college';

interface CollegeCardProps {
  college: College;
  showSaveButton?: boolean;
}

export default function CollegeCard({ college, showSaveButton = true }: CollegeCardProps) {
  const { state, dispatch } = useApp();
  const isSaved = state.savedColleges.some(c => c.id === college.id);

  const handleSave = () => {
    if (isSaved) {
      dispatch({ type: 'REMOVE_SAVED_COLLEGE', payload: college.id });
    } else {
      dispatch({ type: 'SAVE_COLLEGE', payload: college });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={college.image} 
          alt={college.name}
          className="w-full h-48 object-cover"
        />
        {showSaveButton && (
          <button 
            onClick={handleSave}
            className={`absolute top-2 right-2 p-2 rounded-full ${isSaved ? 'bg-blue-600 text-white' : 'bg-white/90 text-gray-600'}`}
            aria-label={isSaved ? 'Remove from saved' : 'Save college'}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{college.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{college.location}</span>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex items-center text-amber-500 mr-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-700">
              {college.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-sm text-gray-500">•</span>
          <span className="ml-2 text-sm text-gray-600">{college.fees}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {college.courses.slice(0, 3).map((course, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {course}
            </span>
          ))}
          {college.courses.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
              +{college.courses.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}