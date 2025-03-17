
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface Skill {
  skill: string;
  level: number;
  required: number;
}

interface SkillsChartProps {
  skills: Skill[];
  title: string;
}

const SkillsChart = ({ skills, title }: SkillsChartProps) => {
  // Format data for the chart
  const data = skills.map(skill => ({
    name: skill.skill,
    value: skill.level,
    required: skill.required,
    gap: Math.max(skill.required - skill.level, 0)
  }));
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 shadow-md border border-gray-200 rounded-md">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-gray-700">Candidate: {data.value}%</p>
          <p className="text-sm text-gray-700">Required: {data.required}%</p>
          {data.gap > 0 && (
            <p className="text-sm text-red-600">Gap: {data.gap}%</p>
          )}
        </div>
      );
    }
    return null;
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
            >
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" barSize={12} radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.value >= entry.required ? "#8b5cf6" : "#f43f5e"}
                  />
                ))}
              </Bar>
              <Bar 
                dataKey="required" 
                barSize={2} 
                fill="#111111"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsChart;
