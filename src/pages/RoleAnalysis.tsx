
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MetricCard from "@/components/MetricCard";
import FundingVisualization from "@/components/FundingVisualization";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Target, 
  Clock, 
  TrendingUp, 
  BarChart3,
  ChevronLeft,
  ListFilter,
  Brain
} from "lucide-react";
import { 
  candidateCategories, 
  visualizationInsights,
  roleInsights
} from "@/utils/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RoleAnalysis = () => {
  const [selectedRole, setSelectedRole] = useState<string>("Data Scientist");
  
  const totalCandidates = candidateCategories.reduce(
    (total, category) => total + category.candidates.length, 
    0
  );
  
  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Sidebar />
      
      <main className="pt-6 pb-16 md:pl-64">
        <div className="container px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Role Analysis Dashboard</h1>
              <p className="text-gray-500 mt-1">
                AI-driven candidate categorization and insights
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              <Select defaultValue={selectedRole} onValueChange={handleRoleChange}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                  <SelectItem value="Machine Learning Engineer">Machine Learning Engineer</SelectItem>
                  <SelectItem value="AI Researcher">AI Researcher</SelectItem>
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
              value={totalCandidates}
              trend={8}
              icon={<Users className="h-5 w-5" />}
            />
            <MetricCard 
              title="Average Match Score" 
              value="87%"
              trend={2.5}
              icon={<Target className="h-5 w-5" />}
            />
            <MetricCard 
              title="AI Categories Created" 
              value={candidateCategories.length}
              description="AI-generated talent segments"
              trend={15}
              icon={<Brain className="h-5 w-5" />}
            />
            <MetricCard 
              title="Interviews Last Week" 
              value={12}
              trend={-5}
              icon={<Clock className="h-5 w-5" />}
            />
          </div>

          <Tabs defaultValue="visualization" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="visualization">Category Analysis</TabsTrigger>
              <TabsTrigger value="candidates">Candidate Breakdown</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="visualization" className="mt-0">
              <FundingVisualization 
                categories={candidateCategories}
                totalAmount={totalCandidates}
                role={selectedRole}
                insights={visualizationInsights}
              />
            </TabsContent>
            
            <TabsContent value="candidates" className="mt-0">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Candidate Distribution by Category</h2>
                <p className="text-gray-500 mb-6">This tab would show detailed candidate breakdowns by category</p>
                <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                  <p className="text-gray-400">Candidate distribution visualization would appear here</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="insights" className="mt-0">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-4">AI-Generated Insights for {selectedRole}</h2>
                <div className="space-y-6">
                  {roleInsights[selectedRole as keyof typeof roleInsights]?.categoryInsights.map((insight, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-purple-800">{insight.title}</h3>
                      <p className="text-gray-600 mt-1">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default RoleAnalysis;
