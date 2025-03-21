
export interface Candidate {
  id: string;
  name: string;
  role: string;
  score: number;
  matchScore: number;
  technicalScore: number;
  communicationScore: number;
  culturalScore: number;
  interviewDate: string;
  status: 'pending' | 'reviewed' | 'contacted' | 'rejected';
  imageSrc: string;
  keyInsights: string[];
  strengthsWeaknesses: {
    strengths: string[];
    weaknesses: string[];
  };
  skillsMatch: {
    skill: string;
    level: number;
    required: number;
  }[];
  fundingAmount?: number; // For visualization purposes
  category?: string; // AI-generated category
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: number;
  icon?: React.ReactNode;
  color?: string;
}

export interface CandidateBucket {
  id: string;
  title: string;
  description: string;
  candidateCount: number;
  averageScore: number;
  topCandidate: string;
  priority: 'high' | 'medium' | 'low';
}

export interface CandidateCategory {
  name: string;
  percentage: number;
  fundingAmount: number; // In thousands/millions
  categoryScore: number;
  candidates: Candidate[];
}

