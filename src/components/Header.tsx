
import { Bell, Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-interview-800 mr-8">
          AI<span className="text-interview-600">Interview</span>Insights
        </h1>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            className="pl-10 w-[300px] bg-gray-50 border-gray-200 focus:bg-white" 
            placeholder="Search candidates, skills, roles..." 
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" />
          <AvatarFallback>HR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
