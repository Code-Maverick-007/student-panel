import React from 'react';

interface CourseFilterProps {
  selectedCourses: string[];
  onCourseToggle: (course: string) => void;
  availableCourses: string[];
}

export default function CourseFilter({ 
  selectedCourses, 
  onCourseToggle,
  availableCourses 
}: CourseFilterProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Filter by Course</h3>
      <div className="space-y-2 max-h-80 overflow-y-auto p-2">
        {availableCourses.map((course) => (
          <div key={course} className="flex items-center">
            <input
              id={`course-${course}`}
              type="checkbox"
              checked={selectedCourses.includes(course)}
              onChange={() => onCourseToggle(course)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`course-${course}`} className="ml-3 text-sm text-gray-700">
              {course}
            </label>
          </div>
        ))}
      </div>
      {selectedCourses.length > 0 && (
        <button
          onClick={() => selectedCourses.forEach(course => onCourseToggle(course))}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
