
import { Candidate } from "@/types";
import { 
  Card, 
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Check, X, Eye, BookOpen } from "lucide-react";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  // Helper function to get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "reviewed": return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "contacted": return "bg-green-100 text-green-800 hover:bg-green-100";
      case "rejected": return "bg-red-100 text-red-800 hover:bg-red-100";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="overflow-hidden border-gray-200 transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={candidate.imageSrc} alt={candidate.name} />
            <AvatarFallback>{getInitials(candidate.name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 truncate">{candidate.name}</h3>
                <p className="text-sm text-gray-500">{candidate.role}</p>
              </div>
              <Badge variant="outline" className={`${getStatusColor(candidate.status)}`}>
                {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
              </Badge>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Match Score</p>
                <div className="flex items-center gap-2">
                  <Progress value={candidate.matchScore} className="h-2" />
                  <span className="text-sm font-medium">{candidate.matchScore}%</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Interview Score</p>
                <div className="flex items-center gap-2">
                  <Progress value={candidate.score} className="h-2" />
                  <span className="text-sm font-medium">{candidate.score}%</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Key AI Insight</p>
              <p className="text-sm text-gray-700">{candidate.keyInsights[0]}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 bg-gray-50 flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-1" /> View
          </Button>
          <Button variant="outline" size="sm">
            <BookOpen className="h-4 w-4 mr-1" /> Interview
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-green-600 h-8 w-8">
            <Check className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-red-600 h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;
