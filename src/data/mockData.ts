
// Mock data for demonstration purposes
export const studentsData = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.s@example.com",
    phone: "+91 9876543210",
    room: "101",
    course: "Computer Science",
    status: "active" as const,
    joiningDate: "2023-08-15",
    endDate: "2024-07-30",
    monthlyRate: 5000,
    fees: {
      status: "paid",
      amount: 45000,
      lastPaid: "2023-09-01"
    }
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya.p@example.com",
    phone: "+91 8765432109",
    room: "102",
    course: "Electronics Engineering",
    status: "active" as const,
    joiningDate: "2023-08-10",
    endDate: "2024-06-30",
    monthlyRate: 5000,
    fees: {
      status: "due",
      amount: 45000,
      lastPaid: "2023-08-01"
    }
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit.k@example.com",
    phone: "+91 7654321098",
    room: "103",
    course: "Mechanical Engineering",
    status: "inactive" as const,
    joiningDate: "2023-07-25",
    endDate: "2024-05-30",
    monthlyRate: 5000,
    fees: {
      status: "paid",
      amount: 45000,
      lastPaid: "2023-08-05"
    }
  },
  {
    id: "4",
    name: "Neha Singh",
    email: "neha.s@example.com",
    phone: "+91 6543210987",
    room: "204",
    course: "Civil Engineering",
    status: "active" as const,
    joiningDate: "2023-08-05",
    endDate: "2024-06-15",
    monthlyRate: 5000,
    fees: {
      status: "paid",
      amount: 45000,
      lastPaid: "2023-09-02"
    }
  },
  {
    id: "5",
    name: "Vikram Khanna",
    email: "vikram.k@example.com",
    phone: "+91 5432109876",
    room: "205",
    course: "Business Administration",
    status: "pending" as const,
    joiningDate: "2023-09-01",
    endDate: "2024-08-15",
    monthlyRate: 5000,
    fees: {
      status: "pending",
      amount: 45000,
      lastPaid: ""
    }
  },
  {
    id: "6",
    name: "Ananya Desai",
    email: "ananya.d@example.com",
    phone: "+91 4321098765",
    room: "206",
    course: "Architecture",
    status: "active" as const,
    joiningDate: "2023-08-20",
    endDate: "2024-07-10",
    monthlyRate: 5000,
    fees: {
      status: "paid",
      amount: 45000,
      lastPaid: "2023-09-01"
    }
  }
];

export const roomsData = [
  {
    id: "1",
    number: "101",
    type: "Double Sharing",
    capacity: 2,
    occupied: 2,
    floor: "1st",
    block: "A",
    monthlyRate: 5000,
    facilities: ["Attached Bathroom", "Study Table", "Wi-Fi"],
    occupants: ["1", "2"]
  },
  {
    id: "2",
    number: "102",
    type: "Single",
    capacity: 1,
    occupied: 0,
    floor: "1st",
    block: "A",
    monthlyRate: 6000,
    facilities: ["Attached Bathroom", "Study Table", "Wi-Fi", "AC"],
    occupants: []
  },
  {
    id: "3",
    number: "103",
    type: "Triple Sharing",
    capacity: 3,
    occupied: 1,
    floor: "1st",
    block: "A",
    monthlyRate: 4000,
    facilities: ["Common Bathroom", "Study Table", "Wi-Fi"],
    occupants: ["3"]
  },
  {
    id: "4",
    number: "204",
    type: "Double Sharing",
    capacity: 2,
    occupied: 1,
    floor: "2nd",
    block: "A",
    monthlyRate: 5000,
    facilities: ["Attached Bathroom", "Study Table", "Wi-Fi"],
    occupants: ["4"]
  },
  {
    id: "5",
    number: "205",
    type: "Single",
    capacity: 1,
    occupied: 1,
    floor: "2nd",
    block: "A",
    monthlyRate: 6000,
    facilities: ["Attached Bathroom", "Study Table", "Wi-Fi", "AC"],
    occupants: ["5"]
  },
  {
    id: "6",
    number: "206",
    type: "Double Sharing",
    capacity: 2,
    occupied: 1,
    floor: "2nd",
    block: "A",
    monthlyRate: 5000,
    facilities: ["Attached Bathroom", "Study Table", "Wi-Fi"],
    occupants: ["6"]
  },
  {
    id: "7",
    number: "301",
    type: "Triple Sharing",
    capacity: 3,
    occupied: 0,
    floor: "3rd",
    block: "A",
    monthlyRate: 4000,
    facilities: ["Common Bathroom", "Study Table", "Wi-Fi"],
    occupants: []
  },
  {
    id: "8",
    number: "302",
    type: "Double Sharing",
    capacity: 2,
    occupied: 0,
    floor: "3rd",
    block: "A",
    monthlyRate: 5000,
    facilities: ["Attached Bathroom", "Study Table", "Wi-Fi"],
    occupants: []
  }
];

export const dashboardStats = {
  totalStudents: 6,
  totalRooms: 8,
  occupancyRate: "62.5%",
  pendingFees: 1,
  availableRooms: 3,
  recentActivities: [
    {
      id: "1",
      action: "Student Check-in",
      name: "Vikram Khanna",
      time: "2 hours ago",
      room: "205"
    },
    {
      id: "2",
      action: "Fee Payment",
      name: "Neha Singh",
      time: "Yesterday",
      amount: "₹45,000"
    },
    {
      id: "3",
      action: "Maintenance Request",
      room: "103",
      issue: "Plumbing issue",
      time: "2 days ago"
    },
    {
      id: "4",
      action: "Room Change",
      name: "Amit Kumar",
      time: "3 days ago",
      from: "102",
      to: "103"
    }
  ]
};
