interface ExamFilterProps {
  selectedExams: string[];
  onExamToggle: (exam: string) => void;
}

export default function ExamFilter({ selectedExams, onExamToggle }: ExamFilterProps) {
  const exams = [
    { id: 'jee', label: 'JEE Main' },
    { id: 'mhtcet', label: 'MH-CET' },
    { id: 'direct', label: 'Direct Admission' }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Admission Through</h3>
      <div className="space-y-2">
        {exams.map((exam) => (
          <div key={exam.id} className="flex items-center">
            <input
              id={`exam-${exam.id}`}
              type="checkbox"
              checked={selectedExams.includes(exam.id)}
              onChange={() => onExamToggle(exam.id)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`exam-${exam.id}`} className="ml-3 text-sm text-gray-700">
              {exam.label}
            </label>
          </div>
        ))}
      </div>
      {selectedExams.length > 0 && (
        <button
          onClick={() => selectedExams.forEach(exam => onExamToggle(exam))}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
