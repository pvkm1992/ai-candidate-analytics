
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  Calendar, 
  MessageSquare, 
  Settings, 
  HelpCircle,
  Home
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center gap-x-2 text-sm font-medium px-3 py-2 rounded-md transition-all",
        active 
          ? "bg-interview-100 text-interview-700" 
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};

const Sidebar = () => {
  // In a real app, you would determine active based on current route
  const pathname = window.location.pathname;
  
  return (
    <div className="h-full bg-white border-r border-gray-200 w-64 fixed inset-y-0 left-0 z-30 hidden md:block">
      <div className="flex flex-col h-full p-4">
        <div className="space-y-1 mb-8 mt-6">
          <SidebarItem 
            icon={<Home className="h-5 w-5" />}
            label="Home"
            href="/"
            active={pathname === "/"}
          />
          <SidebarItem 
            icon={<BarChart3 className="h-5 w-5" />}
            label="Dashboard"
            href="/dashboard"
            active={pathname === "/dashboard"}
          />
          <SidebarItem 
            icon={<Users className="h-5 w-5" />}
            label="Candidates"
            href="/candidates"
            active={pathname === "/candidates"}
          />
          <SidebarItem 
            icon={<Briefcase className="h-5 w-5" />}
            label="Jobs"
            href="/jobs"
            active={pathname === "/jobs"}
          />
          <SidebarItem 
            icon={<Calendar className="h-5 w-5" />}
            label="Schedule"
            href="/schedule"
            active={pathname === "/schedule"}
          />
          <SidebarItem 
            icon={<MessageSquare className="h-5 w-5" />}
            label="Messages"
            href="/messages"
            active={pathname === "/messages"}
          />
        </div>
        
        <div className="mt-auto space-y-1">
          <SidebarItem 
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
            href="/settings"
            active={pathname === "/settings"}
          />
          <SidebarItem 
            icon={<HelpCircle className="h-5 w-5" />}
            label="Help & Support"
            href="/help"
            active={pathname === "/help"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
