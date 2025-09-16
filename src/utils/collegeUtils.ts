import type { College } from '../types/college';

export function getAllCourses(colleges: College[] = []): string[] {
  const courses = new Set<string>();
  colleges.forEach(college => {
    college.courses.forEach(course => courses.add(course));
  });
  return Array.from(courses).sort();
}

export function filterCollegesByState(colleges: College[], state: string): College[] {
  if (!state) return [];
  return colleges.filter(college => 
    college.state.toLowerCase().includes(state.toLowerCase())
  );
}

export function getCollegesByExam(colleges: College[], examType: 'jee' | 'mhtcet' | 'direct'): College[] {
  return colleges.filter(college => college.examEligibility[examType]);
}

export function sortCollegesByCutoff(colleges: College[], examType: 'jee' | 'mhtcet' | 'direct'): College[] {
  const examIndex = examType === 'jee' ? 0 : examType === 'mhtcet' ? 1 : 2;
  return [...colleges].sort((a, b) => b.cutoff[examIndex] - a.cutoff[examIndex]);
}
