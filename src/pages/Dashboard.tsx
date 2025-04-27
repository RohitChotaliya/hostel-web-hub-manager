
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BedDouble, Percent, AlertCircle, ArrowRight, DollarSign } from 'lucide-react';
import { dashboardStats } from '@/data/mockData';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Total Students" 
          value={dashboardStats.totalStudents}
          icon={<Users className="h-5 w-5" />}
        />
        
        <StatCard 
          title="Available Rooms" 
          value={dashboardStats.availableRooms}
          icon={<BedDouble className="h-5 w-5" />}
        />
        
        <StatCard 
          title="Occupancy Rate" 
          value={dashboardStats.occupancyRate}
          icon={<Percent className="h-5 w-5" />}
          trend="up"
          trendValue="5% from last month"
        />
        
        <StatCard 
          title="Pending Fees" 
          value={dashboardStats.pendingFees}
          icon={<DollarSign className="h-5 w-5" />}
          className="md:col-span-2 lg:col-span-1"
        />
      </div>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Recent Activities</CardTitle>
              <Button variant="link" size="sm" className="text-hostel-600">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardStats.recentActivities.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex items-start border-b border-gray-100 pb-3 last:border-0"
                >
                  <div className="h-8 w-8 rounded-full bg-hostel-100 flex items-center justify-center text-hostel-700 mr-3">
                    {activity.action.includes("Check-in") ? (
                      <Users className="h-4 w-4" />
                    ) : activity.action.includes("Fee") ? (
                      <DollarSign className="h-4 w-4" />
                    ) : activity.action.includes("Maintenance") ? (
                      <AlertCircle className="h-4 w-4" />
                    ) : (
                      <BedDouble className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <div className="text-xs text-muted-foreground mt-1">
                      {activity.name && <span>{activity.name} • </span>}
                      {activity.room && <span>Room {activity.room} • </span>}
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Quick Actions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="h-auto py-6 justify-start gap-3 bg-hostel-50 hover:bg-hostel-100 text-hostel-700 hover:text-hostel-800">
                <Users className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Add Student</div>
                  <div className="text-xs">Register new student</div>
                </div>
              </Button>
              
              <Button className="h-auto py-6 justify-start gap-3 bg-hostel-50 hover:bg-hostel-100 text-hostel-700 hover:text-hostel-800">
                <BedDouble className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Allocate Room</div>
                  <div className="text-xs">Assign room to student</div>
                </div>
              </Button>
              
              <Button className="h-auto py-6 justify-start gap-3 bg-hostel-50 hover:bg-hostel-100 text-hostel-700 hover:text-hostel-800">
                <DollarSign className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Collect Fee</div>
                  <div className="text-xs">Record fee payment</div>
                </div>
              </Button>
              
              <Button className="h-auto py-6 justify-start gap-3 bg-hostel-50 hover:bg-hostel-100 text-hostel-700 hover:text-hostel-800">
                <AlertCircle className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Report Issue</div>
                  <div className="text-xs">Log maintenance request</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
