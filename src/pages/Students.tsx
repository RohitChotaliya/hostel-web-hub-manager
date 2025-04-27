
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StudentCard from '@/components/students/StudentCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search } from 'lucide-react';
import { studentsData } from '@/data/mockData';
import { toast } from '@/components/ui/use-toast';

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter students based on search query
  const filteredStudents = studentsData.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.room.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleViewStudent = (id: string) => {
    toast({
      title: "View Student",
      description: `Viewing student with ID: ${id}`,
    });
  };
  
  const handleEditStudent = (id: string) => {
    toast({
      title: "Edit Student",
      description: `Editing student with ID: ${id}`,
    });
  };
  
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Students</h1>
        
        <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button className="bg-hostel-600 hover:bg-hostel-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>
      
      {filteredStudents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No students found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onView={handleViewStudent}
              onEdit={handleEditStudent}
            />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Students;
