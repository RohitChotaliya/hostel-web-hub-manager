
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Mail, Phone, IndianRupee } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface StudentCardProps {
  student: {
    id: string;
    name: string;
    email: string;
    phone: string;
    room: string;
    course: string;
    monthlyRate: number;
    status: 'active' | 'inactive' | 'pending';
  };
  onView: (id: string) => void;
  onEdit: (id: string) => void;
}

const StudentCard = ({ student, onView, onEdit }: StudentCardProps) => {
  // Generate initials from name
  const initials = student.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
    
  // Determine badge color based on status
  const badgeVariant = 
    student.status === 'active' ? "bg-green-100 text-green-800" :
    student.status === 'inactive' ? "bg-gray-100 text-gray-800" :
    "bg-yellow-100 text-yellow-800";
    
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-hostel-100 text-hostel-700">
                {initials}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-semibold">{student.name}</h3>
              <p className="text-sm text-muted-foreground">{student.course}</p>
              <Badge className={badgeVariant + " mt-1"} variant="outline">
                {student.status}
              </Badge>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onView(student.id)}>
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(student.id)}>
                Edit Details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="mt-4 grid gap-2">
          <div className="flex items-center text-sm">
            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
            {student.email}
          </div>
          <div className="flex items-center text-sm">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            {student.phone}
          </div>
          <div className="flex items-center text-sm">
            <IndianRupee className="mr-2 h-4 w-4 text-muted-foreground" />
            Monthly Rate: ₹{student.monthlyRate?.toLocaleString() || '0'}
          </div>
          <div className="mt-2 text-sm">
            <span className="font-medium">Room:</span> {student.room}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
