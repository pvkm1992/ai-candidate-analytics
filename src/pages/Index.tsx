
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-interview-50 to-interview-100">
      <div className="max-w-3xl text-center px-4">
        <h1 className="text-4xl font-bold text-interview-800 mb-6 md:text-5xl lg:text-6xl">
          AI Interview<span className="text-interview-600">Insights</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 md:text-2xl">
          Revolutionize your recruitment process with AI-powered candidate analytics and insights.
        </p>
        <Link to="/dashboard">
          <Button className="bg-interview-600 hover:bg-interview-700 text-white px-8 py-6 text-lg rounded-md">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
