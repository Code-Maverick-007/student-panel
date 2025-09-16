export const mockColleges = [
  {
    id: 'DL1',
    name: 'Indian Institute of Technology Delhi (IIT Delhi)',
    location: 'Delhi',
    type: 'Government',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400',
    fees: '₹2,50,000/year',
    cutoff: [95, 92, 88, 85, 82],
    about: 'IIT Delhi is one of India’s most prestigious engineering institutes, offering UG, PG, and PhD programs in engineering, science, and management.',
    courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'],
    examEligibility: {
      jee: true,
      mhtcet: false,
      direct: false
    },
    placements: {
      averagePackage: '₹18 LPA',
      highestPackage: '₹1.2 Crore',
      placementRate: '95%'
    }
  },
  {
    id: 'DL2',
    name: 'Delhi Technological University (DTU)',
    location: 'Delhi',
    type: 'Government',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400',
    fees: '₹1,90,000/year',
    cutoff: [90, 88, 85, 80, 75],
    about: 'Formerly known as Delhi College of Engineering, DTU is a top government engineering university with strong industry connections.',
    courses: ['Information Technology', 'Electronics Engineering', 'Biotechnology', 'Environmental Engineering'],
    examEligibility: {
      jee: true,
      mhtcet: false,
      direct: true
    },
    placements: {
      averagePackage: '₹12 LPA',
      highestPackage: '₹55 LPA',
      placementRate: '92%'
    }
  },
  {
    id: 'DL3',
    name: 'All India Institute of Medical Sciences (AIIMS Delhi)',
    location: 'Delhi',
    type: 'Government',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
    fees: '₹1,20,000/year',
    cutoff: [99, 98, 97, 96, 95],
    about: 'AIIMS Delhi is India’s top medical institute, known for its world-class medical education, research, and healthcare facilities.',
    courses: ['MBBS', 'MD', 'MS', 'Nursing', 'Biotechnology'],
    examEligibility: {
      jee: false,
      mhtcet: false,
      direct: true
    },
    placements: {
      averagePackage: '₹20 LPA',
      highestPackage: '₹50 LPA',
      placementRate: '98%'
    }
  },
  {
    id: 'DL4',
    name: 'Jamia Millia Islamia',
    location: 'Delhi',
    type: 'Central University',
    rating: 4.3,
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400',
    fees: '₹80,000/year',
    cutoff: [85, 82, 80, 75, 70],
    about: 'Jamia Millia Islamia is a central university offering a wide range of programs in humanities, law, architecture, and engineering.',
    courses: ['Law', 'Architecture', 'Media Studies', 'Civil Engineering', 'Computer Science'],
    examEligibility: {
      jee: true,
      mhtcet: false,
      direct: true
    },
    placements: {
      averagePackage: '₹7 LPA',
      highestPackage: '₹20 LPA',
      placementRate: '80%'
    }
  },
  {
    id: 'DL5',
    name: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
    location: 'Delhi',
    type: 'State University',
    rating: 4.4,
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400',
    fees: '₹1,50,000/year',
    cutoff: [88, 85, 82, 78, 75],
    about: 'IGDTUW is a government university dedicated to empowering women in technology and engineering education.',
    courses: ['Computer Science', 'Electronics', 'IT', 'AI & ML', 'Data Science'],
    examEligibility: {
      jee: true,
      mhtcet: false,
      direct: true
    },
    placements: {
      averagePackage: '₹8 LPA',
      highestPackage: '₹40 LPA',
      placementRate: '90%'
    }
  },
  {
    id: 'DL6',
    name: 'National Institute of Fashion Technology (NIFT) Delhi',
    location: 'Delhi',
    type: 'Government',
    rating: 4.2,
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400',
    fees: '₹3,00,000/year',
    cutoff: [80, 78, 75, 72, 70],
    about: 'NIFT Delhi is India’s top fashion and design institute under the Ministry of Textiles, known for design and fashion management programs.',
    courses: ['Fashion Design', 'Textile Design', 'Fashion Tech', 'Communication Design', 'Fashion Management'],
    examEligibility: {
      jee: false,
      mhtcet: false,
      direct: true
    },
    placements: {
      averagePackage: '₹6 LPA',
      highestPackage: '₹20 LPA',
      placementRate: '85%'
    }
  }
];

export const mockScholarships = [
  {
    id: '1',
    title: 'Merit-Based Scholarship Program',
    eligibility: 'Students with 90%+ marks',
    amount: '₹50,000',
    lastDate: '2024-03-31',
    type: 'Merit-based',
    description: 'Full tuition coverage for exceptional students'
  },
  {
    id: '2',
    title: 'Need-Based Financial Aid',
    eligibility: 'Family income < ₹5 lakhs',
    amount: '₹75,000',
    lastDate: '2024-04-15',
    type: 'Need-based',
    description: 'Financial assistance for economically disadvantaged students'
  },
  {
    id: '3',
    title: 'Women in STEM Scholarship',
    eligibility: 'Female students in Science/Engineering',
    amount: '₹40,000',
    lastDate: '2024-03-20',
    type: 'Gender-based',
    description: 'Encouraging women participation in STEM fields'
  }
];

export const aptitudeQuestions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      "Working with numbers and data",
      "Creating and designing things",
      "Helping and interacting with people",
      "Analyzing and solving problems"
    ]
  },
  {
    id: 2,
    question: "Which work environment appeals to you?",
    options: [
      "Office with latest technology",
      "Creative studio or workshop",
      "Hospital or community center",
      "Laboratory or research facility"
    ]
  },
  {
    id: 3,
    question: "What motivates you most in your career?",
    options: [
      "Financial stability and growth",
      "Creative expression and innovation",
      "Making a difference in society",
      "Intellectual challenges and discovery"
    ]
  },
  {
    id: 4,
    question: "Which subject did you enjoy most in school?",
    options: [
      "Mathematics and Economics",
      "Art and Design",
      "Biology and Social Studies",
      "Physics and Chemistry"
    ]
  },
  {
    id: 5,
    question: "How do you prefer to work?",
    options: [
      "In structured, organized environments",
      "With flexibility and creative freedom",
      "In teams, collaborating with others",
      "Independently on complex projects"
    ]
  }
];

export const careerFlowcharts = [
  {
    id: '1',
    title: 'Engineering Career Path',
    description: 'From BTech to various engineering specializations',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    title: 'Medical Career Path',
    description: 'From MBBS to specialized medical practice',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    title: 'Business Career Path',
    description: 'From MBA to corporate leadership roles',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    title: 'Technology Career Path',
    description: 'From Computer Science to tech innovation',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export interface Counselor {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  rating: number;
  experience: string;
  languages: string[];
  about: string;
  availability: string;
}

export const mockCounselors: Counselor[] = [
  {
    id: 'c1',
    name: 'Dr. Sarah Johnson',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    specialization: 'Career Counseling & College Admissions',
    rating: 4.9,
    experience: '10+ years',
    languages: ['English', 'Spanish'],
    about: 'Helping students find their perfect career path for over a decade with a 95% satisfaction rate.',
    availability: 'Mon-Fri, 9 AM - 5 PM'
  },
  {
    id: 'c2',
    name: 'Prof. Michael Chen',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    specialization: 'Engineering & Technology Careers',
    rating: 4.8,
    experience: '8 years',
    languages: ['English', 'Mandarin'],
    about: 'Former tech industry professional turned career counselor, specializing in STEM fields.',
    availability: 'Tue-Sat, 10 AM - 6 PM'
  },
  {
    id: 'c3',
    name: 'Dr. Emily Wilson',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    specialization: 'Medical & Healthcare Careers',
    rating: 4.9,
    experience: '12 years',
    languages: ['English', 'French'],
    about: 'Helping aspiring healthcare professionals navigate their educational and career journey.',
    availability: 'Mon-Thu, 8 AM - 4 PM'
  }
];