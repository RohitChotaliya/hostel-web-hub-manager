
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BedDouble, Settings, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  const NavItem = ({ to, icon: Icon, children }: { to: string; icon: React.ElementType; children: React.ReactNode }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
        "hover:bg-hostel-100 hover:text-hostel-700",
        isActive ? "bg-hostel-100 text-hostel-700 font-medium" : "text-gray-600"
      )}
      onClick={() => isMobile && setIsOpen(false)}
    >
      <Icon size={20} />
      <span>{children}</span>
    </NavLink>
  );

  // Show mobile toggle button
  if (isMobile && !isOpen) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <aside className={cn(
      "bg-white border-r border-gray-200 transition-all z-50",
      isMobile ? "fixed inset-y-0 left-0 w-64" : "w-64 min-h-screen",
      isMobile && !isOpen && "transform -translate-x-full"
    )}>
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          <X className="h-6 w-6" />
        </Button>
      )}
      
      <div className="p-6">
        <h1 className="text-xl font-bold text-hostel-700 flex items-center gap-2">
          <BedDouble className="h-6 w-6" /> 
          <span>Hostel Hub</span>
        </h1>
      </div>
      
      <div className="px-3 py-2 space-y-1">
        <NavItem to="/" icon={Home}>Dashboard</NavItem>
        <NavItem to="/students" icon={Users}>Students</NavItem>
        <NavItem to="/rooms" icon={BedDouble}>Rooms</NavItem>
        <NavItem to="/settings" icon={Settings}>Settings</NavItem>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50">
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
