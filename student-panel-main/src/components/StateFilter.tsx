import React from 'react';

interface StateFilterProps {
  selectedStates: string[];
  onStateToggle: (state: string) => void;
  availableStates: string[];
}

export default function StateFilter({ 
  selectedStates, 
  onStateToggle,
  availableStates 
}: StateFilterProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Filter by State</h3>
      <div className="space-y-2 max-h-60 overflow-y-auto p-2">
        {availableStates.map((state) => (
          <div key={state} className="flex items-center">
            <input
              id={`state-${state}`}
              type="checkbox"
              checked={selectedStates.includes(state)}
              onChange={() => onStateToggle(state)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`state-${state}`} className="ml-3 text-sm text-gray-700">
              {state}
            </label>
          </div>
        ))}
      </div>
      {selectedStates.length > 0 && (
        <button
          onClick={() => selectedStates.forEach(state => onStateToggle(state))}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
