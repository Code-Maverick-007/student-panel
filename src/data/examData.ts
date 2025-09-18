export interface ExamCategory {
  id: string;
  name: string;
  exams: {
    id: string;
    name: string;
    fullForm: string;
  }[];
}

export const examCategories: ExamCategory[] = [
  {
    id: 'engineering',
    name: 'Engineering',
    exams: [
      { id: 'jee-main', name: 'JEE Main', fullForm: 'Joint Entrance Examination Main' },
      { id: 'jee-advanced', name: 'JEE Advanced', fullForm: 'Joint Entrance Examination Advanced' },
      { id: 'bitsat', name: 'BITSAT', fullForm: 'Birla Institute of Technology & Science Admission Test' },
      { id: 'viteee', name: 'VITEEE', fullForm: 'VIT Engineering Entrance Examination' },
      { id: 'srmjeee', name: 'SRMJEEE', fullForm: 'SRM Joint Engineering Entrance Examination' },
      { id: 'mhtcet', name: 'MHT-CET', fullForm: 'Maharashtra Common Entrance Test' },
    ]
  },
  {
    id: 'medical',
    name: 'Medical',
    exams: [
      { id: 'neet', name: 'NEET', fullForm: 'National Eligibility cum Entrance Test' },
      { id: 'aiims-mbbs', name: 'AIIMS MBBS', fullForm: 'All India Institute of Medical Sciences MBBS' },
      { id: 'jipmer', name: 'JIPMER', fullForm: 'Jawaharlal Institute of Postgraduate Medical Education & Research' }
    ]
  },
  {
    id: 'management',
    name: 'Management',
    exams: [
      { id: 'cat', name: 'CAT', fullForm: 'Common Admission Test' },
      { id: 'mat', name: 'MAT', fullForm: 'Management Aptitude Test' },
      { id: 'xat', name: 'XAT', fullForm: 'Xavier Aptitude Test' },
      { id: 'cmat', name: 'CMAT', fullForm: 'Common Management Admission Test' }
    ]
  },
  {
    id: 'law',
    name: 'Law',
    exams: [
      { id: 'clat', name: 'CLAT', fullForm: 'Common Law Admission Test' },
      { id: 'ailet', name: 'AILET', fullForm: 'All India Law Entrance Test' }
    ]
  }
];
