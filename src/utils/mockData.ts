import { Candidate, CandidateBucket, CandidateCategory } from "@/types";

// Mock candidate data
export const candidates: Candidate[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Frontend Developer",
    score: 92,
    matchScore: 95,
    technicalScore: 90,
    communicationScore: 88,
    culturalScore: 94,
    interviewDate: "2023-08-15",
    status: "pending",
    imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    keyInsights: [
      "Strong React proficiency with 5 years experience",
      "Excellent problem-solving approach in technical scenarios",
      "High engagement and enthusiasm for the role"
    ],
    strengthsWeaknesses: {
      strengths: ["React expertise", "Clear communication", "Team collaboration"],
      weaknesses: ["Limited backend experience", "Could improve SQL knowledge"]
    },
    skillsMatch: [
      { skill: "React", level: 95, required: 80 },
      { skill: "TypeScript", level: 90, required: 75 },
      { skill: "CSS/SASS", level: 85, required: 70 },
      { skill: "Node.js", level: 65, required: 50 }
    ]
  },
  {
    id: "2",
    name: "Samantha Lee",
    role: "Full Stack Developer",
    score: 89,
    matchScore: 92,
    technicalScore: 94,
    communicationScore: 85,
    culturalScore: 88,
    interviewDate: "2023-08-14",
    status: "pending",
    imageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    keyInsights: [
      "Full stack proficiency with React and Node.js",
      "Previous experience in similar industry",
      "Showed strong architectural thinking"
    ],
    strengthsWeaknesses: {
      strengths: ["Technical breadth", "Problem solving", "Self-learning"],
      weaknesses: ["Communication could be more concise", "Limited leadership experience"]
    },
    skillsMatch: [
      { skill: "React", level: 88, required: 80 },
      { skill: "Node.js", level: 92, required: 75 },
      { skill: "MongoDB", level: 90, required: 70 },
      { skill: "AWS", level: 80, required: 60 }
    ]
  },
  {
    id: "3",
    name: "David Kim",
    role: "DevOps Engineer",
    score: 84,
    matchScore: 81,
    technicalScore: 87,
    communicationScore: 82,
    culturalScore: 85,
    interviewDate: "2023-08-10",
    status: "reviewed",
    imageSrc: "https://randomuser.me/api/portraits/men/57.jpg",
    keyInsights: [
      "Strong CI/CD pipeline experience",
      "Kubernetes and Docker expertise",
      "Proactive about security concerns"
    ],
    strengthsWeaknesses: {
      strengths: ["Infrastructure as code", "Automation mindset", "Security focus"],
      weaknesses: ["Could improve on soft skills", "Limited experience with Azure"]
    },
    skillsMatch: [
      { skill: "Kubernetes", level: 90, required: 80 },
      { skill: "Docker", level: 95, required: 85 },
      { skill: "Terraform", level: 85, required: 70 },
      { skill: "AWS", level: 88, required: 75 }
    ]
  },
  {
    id: "4",
    name: "Emily Chen",
    role: "UX/UI Designer",
    score: 91,
    matchScore: 89,
    technicalScore: 88,
    communicationScore: 95,
    culturalScore: 93,
    interviewDate: "2023-08-12",
    status: "pending",
    imageSrc: "https://randomuser.me/api/portraits/women/33.jpg",
    keyInsights: [
      "Outstanding portfolio with similar industry projects",
      "Strong user-centered design approach",
      "Excellent presentation skills"
    ],
    strengthsWeaknesses: {
      strengths: ["Visual design", "User research", "Stakeholder communication"],
      weaknesses: ["Limited experience with design systems", "Could improve technical knowledge"]
    },
    skillsMatch: [
      { skill: "Figma", level: 98, required: 80 },
      { skill: "User Research", level: 90, required: 75 },
      { skill: "Interaction Design", level: 92, required: 85 },
      { skill: "HTML/CSS", level: 75, required: 60 }
    ]
  },
  {
    id: "5",
    name: "Michael Wilson",
    role: "Data Scientist",
    score: 88,
    matchScore: 86,
    technicalScore: 92,
    communicationScore: 80,
    culturalScore: 85,
    interviewDate: "2023-08-09",
    status: "contacted",
    imageSrc: "https://randomuser.me/api/portraits/men/22.jpg",
    keyInsights: [
      "Strong statistical analysis background",
      "Experience with ML models similar to our needs",
      "Passionate about data-driven decision making"
    ],
    strengthsWeaknesses: {
      strengths: ["Python expertise", "ML model development", "Data visualization"],
      weaknesses: ["Communication of technical concepts", "Limited cloud experience"]
    },
    skillsMatch: [
      { skill: "Python", level: 95, required: 85 },
      { skill: "Machine Learning", level: 92, required: 80 },
      { skill: "SQL", level: 85, required: 75 },
      { skill: "Data Visualization", level: 88, required: 70 }
    ]
  },
  {
    id: "6",
    name: "Jessica Taylor",
    role: "Product Manager",
    score: 93,
    matchScore: 94,
    technicalScore: 85,
    communicationScore: 96,
    culturalScore: 97,
    interviewDate: "2023-08-11",
    status: "pending",
    imageSrc: "https://randomuser.me/api/portraits/women/17.jpg",
    keyInsights: [
      "Excellent stakeholder management experience",
      "Strong technical background for a PM",
      "Data-driven approach to product decisions"
    ],
    strengthsWeaknesses: {
      strengths: ["Strategic thinking", "Leadership", "Communication"],
      weaknesses: ["Could strengthen technical depth", "Limited experience in our industry"]
    },
    skillsMatch: [
      { skill: "Product Strategy", level: 95, required: 85 },
      { skill: "Agile/Scrum", level: 90, required: 80 },
      { skill: "Data Analysis", level: 85, required: 70 },
      { skill: "Technical Knowledge", level: 75, required: 65 }
    ]
  },
  {
    id: "7",
    name: "Ryan Patel",
    role: "Backend Developer",
    score: 87,
    matchScore: 90,
    technicalScore: 95,
    communicationScore: 78,
    culturalScore: 82,
    interviewDate: "2023-08-13",
    status: "reviewed",
    imageSrc: "https://randomuser.me/api/portraits/men/62.jpg",
    keyInsights: [
      "Excellent system design knowledge",
      "Strong Java and Spring Boot expertise",
      "Good understanding of microservices architecture"
    ],
    strengthsWeaknesses: {
      strengths: ["Backend architecture", "Database optimization", "API design"],
      weaknesses: ["Communication skills", "Frontend knowledge"]
    },
    skillsMatch: [
      { skill: "Java", level: 95, required: 85 },
      { skill: "Spring Boot", level: 92, required: 80 },
      { skill: "SQL", level: 90, required: 75 },
      { skill: "System Design", level: 88, required: 70 }
    ]
  },
  {
    id: "8",
    name: "Lisa Wong",
    role: "QA Engineer",
    score: 86,
    matchScore: 82,
    technicalScore: 84,
    communicationScore: 90,
    culturalScore: 88,
    interviewDate: "2023-08-08",
    status: "rejected",
    imageSrc: "https://randomuser.me/api/portraits/women/59.jpg",
    keyInsights: [
      "Strong manual and automated testing experience",
      "Good understanding of CI/CD for testing",
      "Experience with similar tech stack"
    ],
    strengthsWeaknesses: {
      strengths: ["Test planning", "Automation scripts", "Attention to detail"],
      weaknesses: ["Limited API testing experience", "Could improve programming skills"]
    },
    skillsMatch: [
      { skill: "Selenium", level: 92, required: 80 },
      { skill: "Test Planning", level: 90, required: 75 },
      { skill: "JavaScript", level: 75, required: 70 },
      { skill: "API Testing", level: 70, required: 75 }
    ]
  }
];

// Mock candidate buckets data
export const candidateBuckets: CandidateBucket[] = [
  {
    id: "b1",
    title: "Frontend Developers",
    description: "React and JavaScript specialists",
    candidateCount: 24,
    averageScore: 87,
    topCandidate: "Alex Johnson",
    priority: "high"
  },
  {
    id: "b2",
    title: "Full Stack Engineers",
    description: "End-to-end development candidates",
    candidateCount: 18,
    averageScore: 82,
    topCandidate: "Samantha Lee",
    priority: "medium"
  },
  {
    id: "b3",
    title: "DevOps Specialists",
    description: "Infrastructure and automation experts",
    candidateCount: 12,
    averageScore: 79,
    topCandidate: "David Kim",
    priority: "medium"
  },
  {
    id: "b4",
    title: "Product & Design",
    description: "UX/UI and product management",
    candidateCount: 15,
    averageScore: 88,
    topCandidate: "Jessica Taylor",
    priority: "high"
  },
  {
    id: "b5",
    title: "Data Scientists",
    description: "ML and analytics specialists",
    candidateCount: 9,
    averageScore: 84,
    topCandidate: "Michael Wilson",
    priority: "low"
  }
];

// Dashboard summary data
export const dashboardSummary = {
  totalCandidates: 78,
  averageScore: 84.5,
  highMatchCandidates: 23,
  pendingReview: 42,
  interviewsLastWeek: 15,
  topSkillGaps: [
    { skill: "React Native", gap: 25 },
    { skill: "GraphQL", gap: 18 },
    { skill: "System Design", gap: 15 }
  ],
  weeklyTrend: [
    { week: "Week 1", candidates: 12, averageScore: 80 },
    { week: "Week 2", candidates: 15, averageScore: 82 },
    { week: "Week 3", candidates: 22, averageScore: 83 },
    { week: "Week 4", candidates: 29, averageScore: 85 }
  ]
};

// Helper function to get candidates by bucket
export const getCandidatesByBucket = (bucketId: string): Candidate[] => {
  switch (bucketId) {
    case "b1": // Frontend Developers
      return candidates.filter(c => 
        c.role.includes("Frontend") || 
        c.role.includes("UI") || 
        c.role.includes("React")
      );
    case "b2": // Full Stack Engineers
      return candidates.filter(c => 
        c.role.includes("Full Stack") || 
        c.role.includes("Fullstack")
      );
    case "b3": // DevOps Specialists
      return candidates.filter(c => 
        c.role.includes("DevOps") || 
        c.role.includes("SRE") || 
        c.role.includes("Infrastructure")
      );
    case "b4": // Product & Design
      return candidates.filter(c => 
        c.role.includes("Product") || 
        c.role.includes("Design") || 
        c.role.includes("UX")
      );
    case "b5": // Data Scientists
      return candidates.filter(c => 
        c.role.includes("Data") || 
        c.role.includes("Machine Learning") || 
        c.role.includes("Analytics")
      );
    default:
      return candidates;
  }
};

// AI-generated categories for the selected role
export const candidateCategories: CandidateCategory[] = [
  {
    name: "Deep Learning Specialists",
    percentage: 24.3,
    fundingAmount: 10.8,
    categoryScore: 92,
    candidates: candidates.filter(c => c.role.includes("Data") || c.role.includes("Machine Learning")).slice(0, 5)
  },
  {
    name: "NLP Engineers",
    percentage: 15.5,
    fundingAmount: 6.8,
    categoryScore: 87,
    candidates: candidates.filter(c => c.role.includes("Data") || c.role.includes("Analytics")).slice(0, 4)
  },
  {
    name: "Computer Vision Experts",
    percentage: 14.3,
    fundingAmount: 6.0,
    categoryScore: 85,
    candidates: candidates.filter(c => c.role.includes("Data") || c.role.includes("Machine Learning")).slice(0, 3)
  },
  {
    name: "ML Ops Practitioners",
    percentage: 9.4,
    fundingAmount: 4.8,
    categoryScore: 81,
    candidates: candidates.filter(c => c.role.includes("DevOps") || c.role.includes("Infrastructure")).slice(0, 3)
  },
  {
    name: "Data Engineers",
    percentage: 8.7,
    fundingAmount: 2.9,
    categoryScore: 79,
    candidates: candidates.filter(c => c.role.includes("Data") || c.role.includes("Backend")).slice(0, 3)
  },
  {
    name: "AI Ethics Specialists",
    percentage: 5.5,
    fundingAmount: 1.9,
    categoryScore: 76,
    candidates: candidates.filter(c => c.role.includes("Product") || c.role.includes("Manager")).slice(0, 2)
  },
  {
    name: "Reinforcement Learning",
    percentage: 5.5,
    fundingAmount: 1.5,
    categoryScore: 74,
    candidates: candidates.filter(c => c.role.includes("Data") || c.role.includes("Backend")).slice(0, 2)
  },
  {
    name: "Speech Recognition",
    percentage: 3.6,
    fundingAmount: 1.1,
    categoryScore: 72,
    candidates: candidates.filter(c => c.role.includes("Frontend") || c.role.includes("Full Stack")).slice(0, 2)
  },
  {
    name: "Autonomous Systems",
    percentage: 2.3,
    fundingAmount: 0.8,
    categoryScore: 68,
    candidates: candidates.filter(c => c.role.includes("QA") || c.role.includes("Engineer")).slice(0, 1)
  },
  {
    name: "Recommender Systems",
    percentage: 2.3,
    fundingAmount: 0.7,
    categoryScore: 65,
    candidates: candidates.filter(c => c.role.includes("Data") || c.role.includes("Analytics")).slice(0, 1)
  }
];

// Key insights for the visualization
export const visualizationInsights = [
  {
    title: "Deep Learning Specialists",
    description: "Deep Learning Specialists account for 24.3% of top candidates, making them the most prevalent category in the AI talent pool."
  },
  {
    title: "ML Ops Growth",
    description: "ML Ops Practitioners show a 15% increase compared to last quarter, highlighting the growing importance of deployment expertise."
  },
  {
    title: "Skill Gap Alert",
    description: "NLP Engineers score 18% below required expertise in transformer models, which is a core requirement for the role."
  }
];

// Additional role-specific insights
export const roleInsights = {
  "Data Scientist": {
    title: "Data Science Talent Pool Analysis",
    description: "AI-identified categories of data science candidates",
    categoryInsights: [
      {
        title: "Statistical Modeling Experts",
        description: "Candidates with exceptional statistical modeling skills represent 35% of the talent pool but only 15% have industry experience."
      },
      {
        title: "ML Engineering Crossover",
        description: "28% of candidates show strong ML engineering skills alongside data science, making them versatile hires."
      }
    ]
  },
  "Machine Learning Engineer": {
    title: "ML Engineer Talent Pool Analysis",
    description: "AI-identified categories of machine learning engineering candidates",
    categoryInsights: [
      {
        title: "Deep Learning Specialists",
        description: "42% of candidates specialize in deep learning frameworks, particularly PyTorch and TensorFlow."
      },
      {
        title: "Production Deployment Gap",
        description: "Only 23% of candidates have substantial experience deploying models to production environments."
      }
    ]
  }
};
