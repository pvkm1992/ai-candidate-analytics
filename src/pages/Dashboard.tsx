
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MetricCard from "@/components/MetricCard";
import CandidateCard from "@/components/CandidateCard";
import BucketCard from "@/components/BucketCard";
import AiInsightCard from "@/components/AiInsightCard";
import SkillsChart from "@/components/SkillsChart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardTitle, CardDescription, CardHeader, Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Users, 
  Target, 
  Clock, 
  TrendingUp, 
  BarChart3,
  ChevronLeft,
  ListFilter
} from "lucide-react";
import { 
  candidateBuckets, 
  dashboardSummary, 
  getCandidatesByBucket,
  candidates
} from "@/utils/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [selectedBucketId, setSelectedBucketId] = useState<string | null>(null);
  const selectedBucket = selectedBucketId 
    ? candidateBuckets.find(b => b.id === selectedBucketId) 
    : null;
  const bucketCandidates = selectedBucketId 
    ? getCandidatesByBucket(selectedBucketId)
    : [];

  const handleBucketSelect = (bucketId: string) => {
    setSelectedBucketId(bucketId);
  };

  const handleBackToOverview = () => {
    setSelectedBucketId(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Sidebar />
      
      <main className="pt-6 pb-16 md:pl-64">
        <div className="container px-4 md:px-6 max-w-7xl">
          {!selectedBucket ? (
            // Dashboard Overview
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Recruitment Dashboard</h1>
                  <p className="text-gray-500 mt-1">
                    AI insights on your candidate pipeline
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Filter by role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="pm">Product Manager</SelectItem>
                      <SelectItem value="data">Data Scientist</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <ListFilter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <MetricCard 
                  title="Total Candidates" 
                  value={dashboardSummary.totalCandidates}
                  trend={8}
                  icon={<Users className="h-5 w-5" />}
                />
                <MetricCard 
                  title="Average Match Score" 
                  value={`${dashboardSummary.averageScore}%`}
                  trend={2.5}
                  icon={<Target className="h-5 w-5" />}
                />
                <MetricCard 
                  title="High Match Candidates" 
                  value={dashboardSummary.highMatchCandidates}
                  description="Candidates with >90% match"
                  trend={15}
                  icon={<TrendingUp className="h-5 w-5" />}
                />
                <MetricCard 
                  title="Interviews Last Week" 
                  value={dashboardSummary.interviewsLastWeek}
                  trend={-5}
                  icon={<Clock className="h-5 w-5" />}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Recruitment Activity</CardTitle>
                    <CardDescription>Weekly trend of candidates and scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={dashboardSummary.weeklyTrend}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="week" />
                          <YAxis yAxisId="left" orientation="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Area
                            yAxisId="left"
                            type="monotone"
                            dataKey="candidates"
                            stroke="#8884d8"
                            fill="#8b5cf6"
                            fillOpacity={0.2}
                          />
                          <Area
                            yAxisId="right"
                            type="monotone"
                            dataKey="averageScore"
                            stroke="#82ca9d"
                            fill="#10b981"
                            fillOpacity={0.2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Insights</CardTitle>
                    <CardDescription>Trends and suggestions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AiInsightCard 
                      title="Skill Gaps Identified"
                      insights={[
                        "ReactJS demand exceeds available talent by 28%",
                        "Consider bootcamp graduates for junior roles",
                        "Expand search to remote candidates for niche skills"
                      ]}
                      type="negative"
                    />
                    <div className="h-4"></div>
                    <AiInsightCard 
                      title="Hiring Velocity"
                      insights={[
                        "Time-to-hire reduced by 24% with AI screening",
                        "Top candidates receive offers 3.5x faster",
                        "Consider fast-tracking UX designers"
                      ]}
                      type="positive"
                    />
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">Candidate Buckets</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {candidateBuckets.map((bucket) => (
                  <BucketCard 
                    key={bucket.id} 
                    bucket={bucket} 
                    onClick={handleBucketSelect} 
                  />
                ))}
              </div>
            </>
          ) : (
            // Bucket Detail View
            <>
              <div className="flex items-center mb-6">
                <Button 
                  variant="ghost" 
                  onClick={handleBackToOverview}
                  className="mr-4"
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Back
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{selectedBucket.title}</h1>
                  <p className="text-gray-500">{selectedBucket.description}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <MetricCard 
                  title="Total Candidates" 
                  value={selectedBucket.candidateCount}
                  icon={<Users className="h-5 w-5" />}
                />
                <MetricCard 
                  title="Average Score" 
                  value={`${selectedBucket.averageScore}%`}
                  icon={<BarChart3 className="h-5 w-5" />}
                />
                <MetricCard 
                  title="Priority Level" 
                  value={selectedBucket.priority.charAt(0).toUpperCase() + selectedBucket.priority.slice(1)}
                  color={selectedBucket.priority === 'high' ? 'red-600' : (selectedBucket.priority === 'medium' ? 'yellow-600' : 'green-600')}
                />
                <MetricCard 
                  title="Top Performer" 
                  value={selectedBucket.topCandidate}
                />
              </div>

              <div className="grid gap-6 lg:grid-cols-5 mb-8">
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <AiInsightCard 
                        title="Top Candidates to Prioritize"
                        insights={[
                          `${selectedBucket.topCandidate} shows exceptional technical skills with 95% match rate`,
                          "Two candidates have prior experience in your industry",
                          "Consider group interview for top 3 candidates to save time"
                        ]}
                        type="positive"
                      />
                      <AiInsightCard 
                        title="Interview Approach Suggestions"
                        insights={[
                          "Focus technical questions on React performance optimization",
                          "Most candidates lack experience with your specific tech stack",
                          "Assess problem-solving over specific framework knowledge"
                        ]}
                        type="neutral"
                      />
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <SkillsChart 
                    title="Skill Distribution" 
                    skills={[
                      { skill: "JavaScript", level: 85, required: 80 },
                      { skill: "React", level: 78, required: 85 },
                      { skill: "TypeScript", level: 65, required: 75 },
                      { skill: "CSS/SASS", level: 72, required: 70 },
                      { skill: "Node.js", level: 60, required: 50 }
                    ]} 
                  />
                </div>
              </div>

              <div className="mb-6">
                <Tabs defaultValue="all">
                  <div className="flex items-center justify-between">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">All Candidates</TabsTrigger>
                      <TabsTrigger value="high-match">High Match</TabsTrigger>
                      <TabsTrigger value="pending">Pending Review</TabsTrigger>
                    </TabsList>
                    <Select defaultValue="score">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="score">Sort by Score</SelectItem>
                        <SelectItem value="recent">Sort by Recent</SelectItem>
                        <SelectItem value="name">Sort by Name</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <TabsContent value="all" className="mt-0">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {bucketCandidates.map((candidate) => (
                        <CandidateCard key={candidate.id} candidate={candidate} />
                      ))}
                      {bucketCandidates.length === 0 && (
                        <p className="text-gray-500 col-span-full text-center py-12">
                          No candidates found in this bucket.
                        </p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="high-match" className="mt-0">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {bucketCandidates
                        .filter(c => c.matchScore >= 90)
                        .map((candidate) => (
                          <CandidateCard key={candidate.id} candidate={candidate} />
                        ))}
                      {bucketCandidates.filter(c => c.matchScore >= 90).length === 0 && (
                        <p className="text-gray-500 col-span-full text-center py-12">
                          No high-match candidates found in this bucket.
                        </p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pending" className="mt-0">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {bucketCandidates
                        .filter(c => c.status === 'pending')
                        .map((candidate) => (
                          <CandidateCard key={candidate.id} candidate={candidate} />
                        ))}
                      {bucketCandidates.filter(c => c.status === 'pending').length === 0 && (
                        <p className="text-gray-500 col-span-full text-center py-12">
                          No pending candidates found in this bucket.
                        </p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
