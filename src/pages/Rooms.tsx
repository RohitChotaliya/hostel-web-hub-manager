
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import RoomCard from '@/components/rooms/RoomCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { PlusCircle, Search } from 'lucide-react';
import { roomsData } from '@/data/mockData';
import { toast } from '@/components/ui/use-toast';

const Rooms = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Filter rooms based on search query and filter status
  const filteredRooms = roomsData.filter(room => {
    const matchesSearch = 
      room.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.block.toLowerCase().includes(searchQuery.toLowerCase());
      
    if (filterStatus === 'all') return matchesSearch;
    if (filterStatus === 'available') return matchesSearch && room.occupied < room.capacity;
    if (filterStatus === 'full') return matchesSearch && room.occupied === room.capacity;
    if (filterStatus === 'empty') return matchesSearch && room.occupied === 0;
    
    return matchesSearch;
  });
  
  const handleViewRoom = (id: string) => {
    toast({
      title: "View Room",
      description: `Viewing room with ID: ${id}`,
    });
  };
  
  const handleEditRoom = (id: string) => {
    toast({
      title: "Edit Room",
      description: `Editing room with ID: ${id}`,
    });
  };
  
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Rooms</h1>
        
        <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search rooms..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Rooms</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="full">Full</SelectItem>
              <SelectItem value="empty">Empty</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="bg-hostel-600 hover:bg-hostel-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Room
          </Button>
        </div>
      </div>
      
      {filteredRooms.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No rooms found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onView={handleViewRoom}
              onEdit={handleEditRoom}
            />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Rooms;
