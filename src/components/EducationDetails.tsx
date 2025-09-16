interface EducationDetailsProps {
  tenthMarks: number | '';
  twelfthMarks: number | '';
  stream: string;
  onTenthMarksChange: (value: number | '') => void;
  onTwelfthMarksChange: (value: number | '') => void;
  onStreamChange: (stream: string) => void;
}

export default function EducationDetails({
  tenthMarks,
  twelfthMarks,
  stream,
  onTenthMarksChange,
  onTwelfthMarksChange,
  onStreamChange,
}: EducationDetailsProps) {
  const streams = [
    'Science (PCM)',
    'Science (PCB)',
    'Commerce',
    'Arts',
    'Diploma',
    'Other'
  ];

  return (
    <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900">Education Details</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="tenth-marks" className="block text-sm font-medium text-gray-700 mb-1">
            10th Percentage (%)
          </label>
          <input
            type="number"
            id="tenth-marks"
            min="0"
            max="100"
            value={tenthMarks}
            onChange={(e) => onTenthMarksChange(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter 10th percentage"
          />
        </div>

        <div>
          <label htmlFor="twelfth-marks" className="block text-sm font-medium text-gray-700 mb-1">
            12th/Diploma Percentage (%)
          </label>
          <input
            type="number"
            id="twelfth-marks"
            min="0"
            max="100"
            value={twelfthMarks}
            onChange={(e) => onTwelfthMarksChange(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter 12th/Diploma percentage"
          />
        </div>

        <div>
          <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-1">
            Stream
          </label>
          <select
            id="stream"
            value={stream}
            onChange={(e) => onStreamChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select your stream</option>
            {streams.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
