
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Users, IndianRupee } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface RoomCardProps {
  room: {
    id: string;
    number: string;
    type: string;
    capacity: number;
    occupied: number;
    floor: string;
    block: string;
    monthlyRate: number;
  };
  onView: (id: string) => void;
  onEdit: (id: string) => void;
}

const RoomCard = ({ room, onView, onEdit }: RoomCardProps) => {
  // Calculate occupancy percentage
  const occupancyPercentage = (room.occupied / room.capacity) * 100;
  
  // Determine badge color based on occupancy
  const badgeVariant = 
    occupancyPercentage === 100 ? "bg-red-100 text-red-800" :
    occupancyPercentage > 75 ? "bg-orange-100 text-orange-800" :
    occupancyPercentage > 0 ? "bg-green-100 text-green-800" :
    "bg-gray-100 text-gray-800";
    
  const badgeText = 
    occupancyPercentage === 100 ? "Full" :
    occupancyPercentage === 0 ? "Empty" :
    "Available";
    
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">Room {room.number}</h3>
            <p className="text-sm text-muted-foreground">
              {room.block} Block, {room.floor} Floor
            </p>
            <Badge className={badgeVariant + " mt-1"} variant="outline">
              {badgeText}
            </Badge>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onView(room.id)}>
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(room.id)}>
                Edit Room
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">Occupancy</span>
            <span className="text-sm text-muted-foreground">
              {room.occupied}/{room.capacity}
            </span>
          </div>
          <Progress 
            value={occupancyPercentage}
            className={occupancyPercentage === 100 ? "text-red-500" : ""}
          />
        </div>
        
        <div className="mt-4">
          <div className="flex items-center text-sm mb-2">
            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>Room Type: {room.type}</span>
          </div>
          <div className="flex items-center text-sm">
            <IndianRupee className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>Monthly Rate: ₹{room.monthlyRate?.toLocaleString() || '0'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
