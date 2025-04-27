
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardLayout = ({ 
  children,
  className 
}: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        <main className={cn("flex-1 p-4 md:p-6 overflow-auto", className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
