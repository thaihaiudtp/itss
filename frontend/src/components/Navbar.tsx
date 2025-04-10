
import { Link, useLocation } from "react-router-dom";
import { BriefcaseIcon, FileTextIcon, HomeIcon, ListTodoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: <HomeIcon className="h-5 w-5" /> },
    { path: "/internships", label: "Internships", icon: <BriefcaseIcon className="h-5 w-5" /> },
    { path: "/cv-builder", label: "CV Builder", icon: <FileTextIcon className="h-5 w-5" /> },
    { path: "/applications", label: "Applications", icon: <ListTodoIcon className="h-5 w-5" /> },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded">
                <BriefcaseIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">internatree</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-secondary text-primary font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden flex items-center">
            {/* Mobile menu button will be added here */}
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="grid grid-cols-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center py-3",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-gray-500"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
