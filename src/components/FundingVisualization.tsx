
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Tooltip } from "recharts";
import { CandidateCategory } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FundingVisualizationProps {
  categories: CandidateCategory[];
  totalAmount: number;
  role: string;
  insights: {
    title: string;
    description: string;
  }[];
}

const FundingVisualization = ({ categories, totalAmount, role, insights }: FundingVisualizationProps) => {
  // Sort categories by percentage (descending)
  const sortedCategories = [...categories].sort((a, b) => b.percentage - a.percentage);
  
  // Format amount to appropriate units (B for billion, M for million)
  const formatAmount = (amount: number) => {
    if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}B`;
    } else {
      return `${amount}M`;
    }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background p-3 shadow-md border border-border rounded-md">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm">Score: {data.categoryScore}/100</p>
          <p className="text-sm">Percentage: {data.percentage.toFixed(1)}%</p>
          <p className="text-sm">Amount: ${formatAmount(data.fundingAmount)}</p>
          <p className="text-sm">Candidates: {data.candidates.length}</p>
        </div>
      );
    }
    return null;
  };

  // Calculate the threshold for highlighting (e.g., top 25%)
  const threshold = sortedCategories.length > 0 
    ? sortedCategories[Math.floor(sortedCategories.length * 0.25)].percentage 
    : 0;

  return (
    <Card className="w-full">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Top Categories for {role}</CardTitle>
            <CardDescription>AI-generated candidate groupings by skills and experience</CardDescription>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-3xl font-bold">{totalAmount}</span>
            <span className="text-sm text-muted-foreground">Total Candidates</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sortedCategories}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine x={threshold} stroke="#ef4444" strokeDasharray="5 5" />
                <Bar dataKey="percentage" barSize={20}>
                  {sortedCategories.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.percentage >= threshold ? "#8b5cf6" : "#6b7280"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-lg">Key Insights</h3>
                <Info className="h-4 w-4 text-slate-400" />
              </div>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-medium text-sm">{insight.title}</h4>
                    <p className="text-sm text-slate-600">{insight.description}</p>
                    {index < insights.length - 1 && <Separator className="my-2" />}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h3 className="font-medium text-lg mb-3">Top Outliers</h3>
              <div className="space-y-3">
                {sortedCategories.slice(0, 3).map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{category.name}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                          {category.candidates.length} candidates
                        </Badge>
                        {index === 0 && (
                          <div className="flex items-center text-green-600 text-xs">
                            <ArrowUp className="h-3 w-3 mr-1" />
                            Top priority
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-lg font-bold">{category.percentage.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h3 className="font-medium text-lg mb-2">Legend</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                  <span>High priority</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-sm mr-2"></div>
                  <span>Normal priority</span>
                </div>
                <div className="flex items-center col-span-2">
                  <div className="w-4 h-0 border border-red-500 border-dashed mr-2"></div>
                  <span>Priority threshold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FundingVisualization;
