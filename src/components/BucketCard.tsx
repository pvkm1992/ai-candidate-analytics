
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CandidateBucket } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Star, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface BucketCardProps {
  bucket: CandidateBucket;
  onClick: (bucketId: string) => void;
}

const BucketCard = ({ bucket, onClick }: BucketCardProps) => {
  // Helper function to get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 hover:bg-red-100";
      case "medium": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "low": return "bg-green-100 text-green-800 hover:bg-green-100";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <Card className="overflow-hidden border-gray-200 transition-all hover:shadow-md cursor-pointer" 
      onClick={() => onClick(bucket.id)}>
      <CardContent className="p-6 pb-0">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-medium text-gray-900 text-lg">{bucket.title}</h3>
          <Badge variant="outline" className={getPriorityColor(bucket.priority)}>
            {bucket.priority.charAt(0).toUpperCase() + bucket.priority.slice(1)} Priority
          </Badge>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">{bucket.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-blue-100">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Candidates</p>
              <p className="text-sm font-medium">{bucket.candidateCount}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-purple-100">
              <Star className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Avg. Score</p>
              <p className="text-sm font-medium">{bucket.averageScore}/100</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-1">Quality of Bucket</p>
          <Progress value={bucket.averageScore} className="h-2" />
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 bg-gray-50 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Top Candidate</p>
          <p className="text-sm font-medium">{bucket.topCandidate}</p>
        </div>
        <Button variant="ghost" size="sm" className="text-interview-600">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BucketCard;
