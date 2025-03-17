
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck, CircleAlert, Zap } from "lucide-react";

interface AiInsightCardProps {
  title: string;
  insights: string[];
  type: 'positive' | 'negative' | 'neutral';
}

const AiInsightCard = ({ title, insights, type }: AiInsightCardProps) => {
  // Icon based on insight type
  const getIcon = () => {
    switch(type) {
      case 'positive':
        return <CircleCheck className="h-5 w-5 text-green-500" />;
      case 'negative':
        return <CircleAlert className="h-5 w-5 text-amber-500" />;
      default:
        return <Zap className="h-5 w-5 text-blue-500" />;
    }
  };
  
  // Background color based on insight type
  const getBgColor = () => {
    switch(type) {
      case 'positive':
        return 'bg-green-50 border-green-100';
      case 'negative':
        return 'bg-amber-50 border-amber-100';
      default:
        return 'bg-blue-50 border-blue-100';
    }
  };
  
  return (
    <Card className={`${getBgColor()} shadow-sm`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          {getIcon()}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
              <div className="min-w-[8px] h-2 w-2 rounded-full bg-gray-400 mt-1.5" />
              <span>{insight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default AiInsightCard;
