
import { Card, CardContent } from "@/components/ui/card";
import { cva } from "class-variance-authority";
import { TrendingUp, TrendingDown } from "lucide-react";
import { MetricCardProps } from "@/types";
import { cn } from "@/lib/utils";

const trendVariants = cva("text-xs font-medium flex items-center gap-1 mt-1", {
  variants: {
    trend: {
      positive: "text-green-600",
      negative: "text-red-600",
      neutral: "text-gray-500"
    }
  },
  defaultVariants: {
    trend: "neutral"
  }
});

const MetricCard = ({ 
  title, 
  value, 
  description, 
  trend, 
  icon,
  color = "interview-600"
}: MetricCardProps) => {
  let trendDisplay = null;
  let trendVariant: "positive" | "negative" | "neutral" = "neutral";
  
  if (trend !== undefined) {
    if (trend > 0) {
      trendVariant = "positive";
      trendDisplay = (
        <>
          <TrendingUp className="h-3 w-3" /> {trend}% increase
        </>
      );
    } else if (trend < 0) {
      trendVariant = "negative";
      trendDisplay = (
        <>
          <TrendingDown className="h-3 w-3" /> {Math.abs(trend)}% decrease
        </>
      );
    }
  }
  
  return (
    <Card className="overflow-hidden border-gray-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className={`text-2xl font-bold mt-1 text-${color}`}>
              {value}
            </h3>
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
            {trendDisplay && (
              <div className={cn(trendVariants({ trend: trendVariant }))}>
                {trendDisplay}
              </div>
            )}
          </div>
          {icon && (
            <div className={`p-2 rounded-full bg-${color}/10 text-${color}`}>
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
