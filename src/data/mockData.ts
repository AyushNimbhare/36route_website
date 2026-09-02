import {
  Employee,
  Driver,
  Vehicle,
  Route,
  Trip,
  LiveVehicleLocation,
  Schedule,
  AttendanceRecord,
  SafetyAlert,
  NotificationItem,
  User
} from '../types';

export const CURRENT_USER: User = {
  id: 'usr-admin-1',
  name: 'Alex Vance',
  email: 'alex.vance@36route.com',
  role: 'ADMIN',
  department: 'Fleet & Logistics',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  phone: '+1 (555) 234-5678'
};

export const MOCK_USERS: User[] = [
  CURRENT_USER,
  {
    id: 'usr-tm-1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@36route.com',
    role: 'TRANSPORT_MANAGER',
    department: 'Operations',
    phone: '+1 (555) 345-6789'
  },
  {
    id: 'usr-hr-1',
    name: 'Michael Chang',
    email: 'michael.c@36route.com',
    role: 'HR',
    department: 'Human Resources',
    phone: '+1 (555) 456-7890'
  },
  {
    id: 'usr-cr-1',
    name: 'Elena Rostova',
    email: 'elena.r@36route.com',
    role: 'CONTROL_ROOM',
    department: 'Safety & Control',
    phone: '+1 (555) 567-8901'
  }
];

export const MOCK_EMPLOYEES: Employee[] = [
  { id: 'emp-101', employeeId: 'EMP-0101', name: 'David Miller', email: 'david.m@company.com', phone: '+1 555-0192', department: 'Engineering', pickupPoint: 'Central Square Bus Stop', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-101', createdAt: '2024-01-15' },
  { id: 'emp-102', employeeId: 'EMP-0102', name: 'Sophia Chen', email: 'sophia.c@company.com', phone: '+1 555-0193', department: 'Product', pickupPoint: 'West End Metro Station', routeId: 'rt-102', routeName: 'Silicon Express South', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-102', createdAt: '2024-01-16' },
  { id: 'emp-103', employeeId: 'EMP-0103', name: 'James Wilson', email: 'james.w@company.com', phone: '+1 555-0194', department: 'Finance', pickupPoint: 'Green Valley Apartments', routeId: 'rt-103', routeName: 'Financial Hub Loop', shift: '09:00 AM - 06:00 PM', status: 'Active', assignedVehicleNumber: 'MINI-201', createdAt: '2024-01-18' },
  { id: 'emp-104', employeeId: 'EMP-0104', name: 'Emma Watson', email: 'emma.w@company.com', phone: '+1 555-0195', department: 'Design', pickupPoint: 'Sunset Boulevard Corner', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-101', createdAt: '2024-01-20' },
  { id: 'emp-105', employeeId: 'EMP-0105', name: 'Liam Neeson', email: 'liam.n@company.com', phone: '+1 555-0196', department: 'Operations', pickupPoint: 'Oakridge Heights Gate 2', routeId: 'rt-104', routeName: 'Airport Corridor East', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-103', createdAt: '2024-02-01' },
  { id: 'emp-106', employeeId: 'EMP-0106', name: 'Olivia Taylor', email: 'olivia.t@company.com', phone: '+1 555-0197', department: 'Engineering', pickupPoint: 'Central Square Bus Stop', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-101', createdAt: '2024-02-03' },
  { id: 'emp-107', employeeId: 'EMP-0107', name: 'Noah Garcia', email: 'noah.g@company.com', phone: '+1 555-0198', department: 'Marketing', pickupPoint: 'Downtown Station Pier', routeId: 'rt-105', routeName: 'Metro Connect Direct', shift: '09:00 AM - 06:00 PM', status: 'Active', assignedVehicleNumber: 'MINI-202', createdAt: '2024-02-05' },
  { id: 'emp-108', employeeId: 'EMP-0108', name: 'Ava Martinez', email: 'ava.m@company.com', phone: '+1 555-0199', department: 'Human Resources', pickupPoint: 'West End Metro Station', routeId: 'rt-102', routeName: 'Silicon Express South', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-102', createdAt: '2024-02-07' },
  { id: 'emp-109', employeeId: 'EMP-0109', name: 'Lucas Robinson', email: 'lucas.r@company.com', phone: '+1 555-0200', department: 'Engineering', pickupPoint: 'Pine Street Crossing', routeId: 'rt-106', routeName: 'Suburban Commuter A', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-104', createdAt: '2024-02-10' },
  { id: 'emp-110', employeeId: 'EMP-0110', name: 'Mia Clark', email: 'mia.c@company.com', phone: '+1 555-0201', department: 'Quality Assurance', pickupPoint: 'Green Valley Apartments', routeId: 'rt-103', routeName: 'Financial Hub Loop', shift: '09:00 AM - 06:00 PM', status: 'On Leave', assignedVehicleNumber: 'MINI-201', createdAt: '2024-02-12' },
  { id: 'emp-111', employeeId: 'EMP-0111', name: 'Ethan Rodriguez', email: 'ethan.r@company.com', phone: '+1 555-0202', department: 'Data Science', pickupPoint: 'Highland Park Gate 1', routeId: 'rt-107', routeName: 'North Suburbs Direct', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-105', createdAt: '2024-02-14' },
  { id: 'emp-112', employeeId: 'EMP-0112', name: 'Isabella Lewis', email: 'isabella.l@company.com', phone: '+1 555-0203', department: 'Sales', pickupPoint: 'Downtown Station Pier', routeId: 'rt-105', routeName: 'Metro Connect Direct', shift: '09:00 AM - 06:00 PM', status: 'Active', assignedVehicleNumber: 'MINI-202', createdAt: '2024-02-15' },
  { id: 'emp-113', employeeId: 'EMP-0113', name: 'Mason Lee', email: 'mason.l@company.com', phone: '+1 555-0204', department: 'Engineering', pickupPoint: 'Pine Street Crossing', routeId: 'rt-106', routeName: 'Suburban Commuter A', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-104', createdAt: '2024-02-18' },
  { id: 'emp-114', employeeId: 'EMP-0114', name: 'Charlotte Walker', email: 'charlotte.w@company.com', phone: '+1 555-0205', department: 'Legal', pickupPoint: 'Sunset Boulevard Corner', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-101', createdAt: '2024-02-20' },
  { id: 'emp-115', employeeId: 'EMP-0115', name: 'Logan Hall', email: 'logan.h@company.com', phone: '+1 555-0206', department: 'Customer Success', pickupPoint: 'Oakridge Heights Gate 2', routeId: 'rt-104', routeName: 'Airport Corridor East', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-103', createdAt: '2024-02-22' },
  { id: 'emp-116', employeeId: 'EMP-0116', name: 'Harper Allen', email: 'harper.a@company.com', phone: '+1 555-0207', department: 'Engineering', pickupPoint: 'Riverfront Plaza', routeId: 'rt-108', routeName: 'Riverside Night Shift Express', shift: '04:00 PM - 01:00 AM', status: 'Active', assignedVehicleNumber: 'SUV-301', createdAt: '2024-02-25' },
  { id: 'emp-117', employeeId: 'EMP-0117', name: 'Benjamin Young', email: 'benjamin.y@company.com', phone: '+1 555-0208', department: 'Infrastructure', pickupPoint: 'Highland Park Gate 1', routeId: 'rt-107', routeName: 'North Suburbs Direct', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-105', createdAt: '2024-02-27' },
  { id: 'emp-118', employeeId: 'EMP-0118', name: 'Amelia King', email: 'amelia.k@company.com', phone: '+1 555-0209', department: 'Security', pickupPoint: 'Riverfront Plaza', routeId: 'rt-108', routeName: 'Riverside Night Shift Express', shift: '04:00 PM - 01:00 AM', status: 'Active', assignedVehicleNumber: 'SUV-301', createdAt: '2024-03-01' },
  { id: 'emp-119', employeeId: 'EMP-0119', name: 'Alexander Wright', email: 'alex.w@company.com', phone: '+1 555-0210', department: 'Engineering', pickupPoint: 'Central Square Bus Stop', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-101', createdAt: '2024-03-03' },
  { id: 'emp-120', employeeId: 'EMP-0120', name: 'Evelyn Scott', email: 'evelyn.s@company.com', phone: '+1 555-0211', department: 'Product', pickupPoint: 'West End Metro Station', routeId: 'rt-102', routeName: 'Silicon Express South', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-102', createdAt: '2024-03-05' },
  { id: 'emp-121', employeeId: 'EMP-0121', name: 'Henry Green', email: 'henry.g@company.com', phone: '+1 555-0212', department: 'Finance', pickupPoint: 'Green Valley Apartments', routeId: 'rt-103', routeName: 'Financial Hub Loop', shift: '09:00 AM - 06:00 PM', status: 'Active', assignedVehicleNumber: 'MINI-201', createdAt: '2024-03-08' },
  { id: 'emp-122', employeeId: 'EMP-0122', name: 'Abigail Adams', email: 'abigail.a@company.com', phone: '+1 555-0213', department: 'Marketing', pickupPoint: 'Downtown Station Pier', routeId: 'rt-105', routeName: 'Metro Connect Direct', shift: '09:00 AM - 06:00 PM', status: 'Active', assignedVehicleNumber: 'MINI-202', createdAt: '2024-03-10' },
  { id: 'emp-123', employeeId: 'EMP-0123', name: 'Sebastian Baker', email: 'sebastian.b@company.com', phone: '+1 555-0214', department: 'Engineering', pickupPoint: 'Pine Street Crossing', routeId: 'rt-106', routeName: 'Suburban Commuter A', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-104', createdAt: '2024-03-12' },
  { id: 'emp-124', employeeId: 'EMP-0124', name: 'Emily Gonzalez', email: 'emily.g@company.com', phone: '+1 555-0215', department: 'Design', pickupPoint: 'Sunset Boulevard Corner', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-101', createdAt: '2024-03-14' },
  { id: 'emp-125', employeeId: 'EMP-0125', name: 'Jack Nelson', email: 'jack.n@company.com', phone: '+1 555-0216', department: 'Operations', pickupPoint: 'Oakridge Heights Gate 2', routeId: 'rt-104', routeName: 'Airport Corridor East', shift: '08:00 AM - 05:00 PM', status: 'Inactive', assignedVehicleNumber: 'BUS-103', createdAt: '2024-03-15' },
  { id: 'emp-126', employeeId: 'EMP-0126', name: 'Elizabeth Carter', email: 'elizabeth.c@company.com', phone: '+1 555-0217', department: 'Engineering', pickupPoint: 'Highland Park Gate 1', routeId: 'rt-107', routeName: 'North Suburbs Direct', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-105', createdAt: '2024-03-18' },
  { id: 'emp-127', employeeId: 'EMP-0127', name: 'Owen Mitchell', email: 'owen.m@company.com', phone: '+1 555-0218', department: 'Quality Assurance', pickupPoint: 'West End Metro Station', routeId: 'rt-102', routeName: 'Silicon Express South', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-102', createdAt: '2024-03-20' },
  { id: 'emp-128', employeeId: 'EMP-0128', name: 'Sofia Perez', email: 'sofia.p@company.com', phone: '+1 555-0219', department: 'Human Resources', pickupPoint: 'Green Valley Apartments', routeId: 'rt-103', routeName: 'Financial Hub Loop', shift: '09:00 AM - 06:00 PM', status: 'Active', assignedVehicleNumber: 'MINI-201', createdAt: '2024-03-22' },
  { id: 'emp-129', employeeId: 'EMP-0129', name: 'Jackson Roberts', email: 'jackson.r@company.com', phone: '+1 555-0220', department: 'Data Science', pickupPoint: 'Pine Street Crossing', routeId: 'rt-106', routeName: 'Suburban Commuter A', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-104', createdAt: '2024-03-25' },
  { id: 'emp-130', employeeId: 'EMP-0130', name: 'Avery Turner', email: 'avery.t@company.com', phone: '+1 555-0221', department: 'Sales', pickupPoint: 'Downtown Station Pier', routeId: 'rt-105', routeName: 'Metro Connect Direct', shift: '09:00 AM - 06:00 PM', status: 'Active', assignedVehicleNumber: 'MINI-202', createdAt: '2024-03-28' },
  { id: 'emp-131', employeeId: 'EMP-0131', name: 'Samuel Phillips', email: 'samuel.p@company.com', phone: '+1 555-0222', department: 'Legal', pickupPoint: 'Central Square Bus Stop', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-101', createdAt: '2024-04-01' },
  { id: 'emp-132', employeeId: 'EMP-0132', name: 'Scarlett Campbell', email: 'scarlett.c@company.com', phone: '+1 555-0223', department: 'Engineering', pickupPoint: 'Oakridge Heights Gate 2', routeId: 'rt-104', routeName: 'Airport Corridor East', shift: '08:00 AM - 05:00 PM', status: 'Active', assignedVehicleNumber: 'BUS-103', createdAt: '2024-04-03' }
];

export const MOCK_DRIVERS: Driver[] = [
  { id: 'drv-201', name: 'Robert Vance', phone: '+1 (555) 987-6543', licenseNumber: 'DL-982341-NY', licenseExpiry: '2027-08-15', assignedVehicleId: 'veh-301', assignedVehicleNumber: 'BUS-101', assignedRouteId: 'rt-101', assignedRouteName: 'Tech Park Shuttle North', activeTripsCount: 142, safetyScore: 98, status: 'On Trip', joinedDate: '2022-04-10' },
  { id: 'drv-202', name: 'Marcus Sterling', phone: '+1 (555) 876-5432', licenseNumber: 'DL-443912-CA', licenseExpiry: '2026-11-20', assignedVehicleId: 'veh-302', assignedVehicleNumber: 'BUS-102', assignedRouteId: 'rt-102', assignedRouteName: 'Silicon Express South', activeTripsCount: 198, safetyScore: 95, status: 'On Trip', joinedDate: '2021-09-15' },
  { id: 'drv-203', name: 'Carlos Mendez', phone: '+1 (555) 765-4321', licenseNumber: 'DL-118239-TX', licenseExpiry: '2025-05-30', assignedVehicleId: 'veh-303', assignedVehicleNumber: 'MINI-201', assignedRouteId: 'rt-103', assignedRouteName: 'Financial Hub Loop', activeTripsCount: 89, safetyScore: 92, status: 'Active', joinedDate: '2023-01-08' },
  { id: 'drv-204', name: 'Viktor Kowalski', phone: '+1 (555) 654-3210', licenseNumber: 'DL-774910-FL', licenseExpiry: '2028-02-14', assignedVehicleId: 'veh-304', assignedVehicleNumber: 'BUS-103', assignedRouteId: 'rt-104', assignedRouteName: 'Airport Corridor East', activeTripsCount: 220, safetyScore: 89, status: 'On Trip', joinedDate: '2020-11-01' },
  { id: 'drv-205', name: 'Arthur Pendelton', phone: '+1 (555) 543-2109', licenseNumber: 'DL-332918-IL', licenseExpiry: '2026-04-18', assignedVehicleId: 'veh-305', assignedVehicleNumber: 'MINI-202', assignedRouteId: 'rt-105', assignedRouteName: 'Metro Connect Direct', activeTripsCount: 115, safetyScore: 97, status: 'Active', joinedDate: '2022-08-20' },
  { id: 'drv-206', name: 'Samir Patel', phone: '+1 (555) 432-1098', licenseNumber: 'DL-665123-NJ', licenseExpiry: '2027-12-05', assignedVehicleId: 'veh-306', assignedVehicleNumber: 'BUS-104', assignedRouteId: 'rt-106', assignedRouteName: 'Suburban Commuter A', activeTripsCount: 165, safetyScore: 94, status: 'On Break', joinedDate: '2022-02-14' },
  { id: 'drv-207', name: 'Dmitri Ivanov', phone: '+1 (555) 321-0987', licenseNumber: 'DL-881923-WA', licenseExpiry: '2026-09-12', assignedVehicleId: 'veh-307', assignedVehicleNumber: 'BUS-105', assignedRouteId: 'rt-107', assignedRouteName: 'North Suburbs Direct', activeTripsCount: 178, safetyScore: 91, status: 'Active', joinedDate: '2021-06-30' },
  { id: 'drv-208', name: 'George Thorne', phone: '+1 (555) 210-9876', licenseNumber: 'DL-229104-MA', licenseExpiry: '2025-10-25', assignedVehicleId: 'veh-308', assignedVehicleNumber: 'SUV-301', assignedRouteId: 'rt-108', assignedRouteName: 'Riverside Night Shift Express', activeTripsCount: 74, safetyScore: 99, status: 'Off Duty', joinedDate: '2023-05-10' },
  { id: 'drv-209', name: 'Antonio Rossi', phone: '+1 (555) 109-8765', licenseNumber: 'DL-554192-OH', licenseExpiry: '2027-01-30', assignedVehicleId: 'veh-309', assignedVehicleNumber: 'BUS-106', assignedRouteId: 'rt-109', assignedRouteName: 'Westside Tech Connector', activeTripsCount: 130, safetyScore: 86, status: 'Active', joinedDate: '2022-11-18' },
  { id: 'drv-210', name: 'Harrison Blake', phone: '+1 (555) 098-7654', licenseNumber: 'DL-993812-GA', licenseExpiry: '2026-07-04', assignedVehicleId: 'veh-310', assignedVehicleNumber: 'VAN-401', assignedRouteId: 'rt-110', assignedRouteName: 'Executive Campus Shuttle', activeTripsCount: 205, safetyScore: 96, status: 'On Trip', joinedDate: '2021-03-22' }
];

export const MOCK_VEHICLES: Vehicle[] = [
  { id: 'veh-301', vehicleNumber: 'BUS-101', model: 'Volvo 9700 Luxury Coach', type: 'Bus', capacity: 45, currentPassengers: 32, assignedDriverId: 'drv-201', assignedDriverName: 'Robert Vance', status: 'On Trip', fuelLevel: 82, lastServiceDate: '2024-08-10', insuranceExpiry: '2025-06-30' },
  { id: 'veh-302', vehicleNumber: 'BUS-102', model: 'Mercedes-Benz Tourismo', type: 'Bus', capacity: 45, currentPassengers: 40, assignedDriverId: 'drv-202', assignedDriverName: 'Marcus Sterling', status: 'On Trip', fuelLevel: 68, lastServiceDate: '2024-07-28', insuranceExpiry: '2025-08-15' },
  { id: 'veh-303', vehicleNumber: 'MINI-201', model: 'Ford Transit Custom Coach', type: 'Minibus', capacity: 20, currentPassengers: 0, assignedDriverId: 'drv-203', assignedDriverName: 'Carlos Mendez', status: 'Available', fuelLevel: 95, lastServiceDate: '2024-08-15', insuranceExpiry: '2025-04-20' },
  { id: 'veh-304', vehicleNumber: 'BUS-103', model: 'Scania Interlink HD', type: 'Bus', capacity: 50, currentPassengers: 42, assignedDriverId: 'drv-204', assignedDriverName: 'Viktor Kowalski', status: 'On Trip', fuelLevel: 74, lastServiceDate: '2024-08-01', insuranceExpiry: '2025-09-10' },
  { id: 'veh-305', vehicleNumber: 'MINI-202', model: 'Mercedes-Benz Sprinter 519', type: 'Minibus', capacity: 18, currentPassengers: 0, assignedDriverId: 'drv-205', assignedDriverName: 'Arthur Pendelton', status: 'Available', fuelLevel: 88, lastServiceDate: '2024-07-14', insuranceExpiry: '2025-05-12' },
  { id: 'veh-306', vehicleNumber: 'BUS-104', model: 'Volvo B8R Coach', type: 'Bus', capacity: 42, currentPassengers: 0, assignedDriverId: 'drv-206', assignedDriverName: 'Samir Patel', status: 'Available', fuelLevel: 90, lastServiceDate: '2024-08-18', insuranceExpiry: '2025-07-25' },
  { id: 'veh-307', vehicleNumber: 'BUS-105', model: 'MAN Lion\'s Coach', type: 'Bus', capacity: 48, currentPassengers: 0, assignedDriverId: 'drv-207', assignedDriverName: 'Dmitri Ivanov', status: 'Available', fuelLevel: 60, lastServiceDate: '2024-06-20', insuranceExpiry: '2025-03-15' },
  { id: 'veh-308', vehicleNumber: 'SUV-301', model: 'Toyota Alphard Executive', type: 'SUV', capacity: 7, currentPassengers: 0, assignedDriverId: 'drv-208', assignedDriverName: 'George Thorne', status: 'Offline', fuelLevel: 50, lastServiceDate: '2024-08-05', insuranceExpiry: '2025-11-01' },
  { id: 'veh-309', vehicleNumber: 'BUS-106', model: 'Irizar i6S Efficient', type: 'Bus', capacity: 40, currentPassengers: 0, assignedDriverId: 'drv-209', assignedDriverName: 'Antonio Rossi', status: 'Maintenance', fuelLevel: 30, lastServiceDate: '2024-08-30', insuranceExpiry: '2025-10-18' },
  { id: 'veh-310', vehicleNumber: 'VAN-401', model: 'Ford E-Transit Electric', type: 'Minibus', capacity: 14, currentPassengers: 11, assignedDriverId: 'drv-210', assignedDriverName: 'Harrison Blake', status: 'On Trip', fuelLevel: 91, lastServiceDate: '2024-08-22', insuranceExpiry: '2025-12-05' }
];

export const MOCK_ROUTES: Route[] = [
  {
    id: 'rt-101',
    name: 'Tech Park Shuttle North',
    code: 'R-NORTH-01',
    startLocation: 'North Suburb Terminal',
    destination: '36Route Tech Park HQ',
    pickupPoints: [
      { id: 'p-1', name: 'Central Square Bus Stop', time: '07:15 AM', location: '12th Ave & Main St', employeeCount: 14, order: 1 },
      { id: 'p-2', name: 'Sunset Boulevard Corner', time: '07:30 AM', location: 'Sunset Blvd & 4th St', employeeCount: 12, order: 2 },
      { id: 'p-3', name: 'Northside Plaza', time: '07:45 AM', location: 'Northside Blvd Plaza', employeeCount: 6, order: 3 }
    ],
    assignedEmployeesCount: 32,
    assignedVehicleId: 'veh-301',
    assignedVehicleNumber: 'BUS-101',
    assignedDriverId: 'drv-201',
    assignedDriverName: 'Robert Vance',
    pickupTime: '07:15 AM',
    dropTime: '08:15 AM',
    status: 'Active',
    distanceKm: 24.5,
    estimatedMinutes: 60
  },
  {
    id: 'rt-102',
    name: 'Silicon Express South',
    code: 'R-SOUTH-02',
    startLocation: 'Southside Metro Junction',
    destination: '36Route Tech Park HQ',
    pickupPoints: [
      { id: 'p-4', name: 'West End Metro Station', time: '07:10 AM', location: 'West Metro Gate 3', employeeCount: 22, order: 1 },
      { id: 'p-5', name: 'South Bay Mall Gate 1', time: '07:35 AM', location: 'South Bay Entrance A', employeeCount: 18, order: 2 }
    ],
    assignedEmployeesCount: 40,
    assignedVehicleId: 'veh-302',
    assignedVehicleNumber: 'BUS-102',
    assignedDriverId: 'drv-202',
    assignedDriverName: 'Marcus Sterling',
    pickupTime: '07:10 AM',
    dropTime: '08:20 AM',
    status: 'Active',
    distanceKm: 31.0,
    estimatedMinutes: 70
  },
  {
    id: 'rt-103',
    name: 'Financial Hub Loop',
    code: 'R-FIN-03',
    startLocation: 'Green Valley Residency',
    destination: 'Financial District Campus',
    pickupPoints: [
      { id: 'p-6', name: 'Green Valley Apartments', time: '08:15 AM', location: 'Valley Rd Gate 1', employeeCount: 8, order: 1 },
      { id: 'p-7', name: 'Civic Center Terminal', time: '08:35 AM', location: 'Civic Center Bay 4', employeeCount: 7, order: 2 }
    ],
    assignedEmployeesCount: 15,
    assignedVehicleId: 'veh-303',
    assignedVehicleNumber: 'MINI-201',
    assignedDriverId: 'drv-203',
    assignedDriverName: 'Carlos Mendez',
    pickupTime: '08:15 AM',
    dropTime: '09:00 AM',
    status: 'Active',
    distanceKm: 16.2,
    estimatedMinutes: 45
  },
  {
    id: 'rt-104',
    name: 'Airport Corridor East',
    code: 'R-EAST-04',
    startLocation: 'Eastside Heights Terminal',
    destination: '36Route Tech Park HQ',
    pickupPoints: [
      { id: 'p-8', name: 'Oakridge Heights Gate 2', time: '07:05 AM', location: 'Oakridge Blvd', employeeCount: 25, order: 1 },
      { id: 'p-9', name: 'East Park Circle', time: '07:25 AM', location: 'Circle East Stop', employeeCount: 17, order: 2 }
    ],
    assignedEmployeesCount: 42,
    assignedVehicleId: 'veh-304',
    assignedVehicleNumber: 'BUS-103',
    assignedDriverId: 'drv-204',
    assignedDriverName: 'Viktor Kowalski',
    pickupTime: '07:05 AM',
    dropTime: '08:10 AM',
    status: 'Active',
    distanceKm: 28.4,
    estimatedMinutes: 65
  },
  {
    id: 'rt-105',
    name: 'Metro Connect Direct',
    code: 'R-METRO-05',
    startLocation: 'Downtown Station Pier',
    destination: 'Corporate Innovation Hub',
    pickupPoints: [
      { id: 'p-10', name: 'Downtown Station Pier', time: '08:20 AM', location: 'Pier 5 Bus Bay', employeeCount: 14, order: 1 }
    ],
    assignedEmployeesCount: 14,
    assignedVehicleId: 'veh-305',
    assignedVehicleNumber: 'MINI-202',
    assignedDriverId: 'drv-205',
    assignedDriverName: 'Arthur Pendelton',
    pickupTime: '08:20 AM',
    dropTime: '08:50 AM',
    status: 'Active',
    distanceKm: 12.0,
    estimatedMinutes: 30
  },
  {
    id: 'rt-106',
    name: 'Suburban Commuter A',
    code: 'R-SUB-06',
    startLocation: 'West Suburban Depot',
    destination: '36Route Tech Park HQ',
    pickupPoints: [
      { id: 'p-11', name: 'Pine Street Crossing', time: '07:20 AM', location: 'Pine St & 8th', employeeCount: 20, order: 1 },
      { id: 'p-12', name: 'Maple Ridge Station', time: '07:40 AM', location: 'Maple Ridge Gate', employeeCount: 15, order: 2 }
    ],
    assignedEmployeesCount: 35,
    assignedVehicleId: 'veh-306',
    assignedVehicleNumber: 'BUS-104',
    assignedDriverId: 'drv-206',
    assignedDriverName: 'Samir Patel',
    pickupTime: '07:20 AM',
    dropTime: '08:25 AM',
    status: 'Active',
    distanceKm: 34.0,
    estimatedMinutes: 65
  },
  {
    id: 'rt-107',
    name: 'North Suburbs Direct',
    code: 'R-NORTH-07',
    startLocation: 'Highland Park Gate 1',
    destination: '36Route Tech Park HQ',
    pickupPoints: [
      { id: 'p-13', name: 'Highland Park Gate 1', time: '07:00 AM', location: 'Highland Park Ave', employeeCount: 30, order: 1 }
    ],
    assignedEmployeesCount: 30,
    assignedVehicleId: 'veh-307',
    assignedVehicleNumber: 'BUS-105',
    assignedDriverId: 'drv-207',
    assignedDriverName: 'Dmitri Ivanov',
    pickupTime: '07:00 AM',
    dropTime: '08:00 AM',
    status: 'Active',
    distanceKm: 29.5,
    estimatedMinutes: 60
  },
  {
    id: 'rt-108',
    name: 'Riverside Night Shift Express',
    code: 'R-NIGHT-08',
    startLocation: 'Riverfront Plaza',
    destination: '36Route 24/7 Operations Hub',
    pickupPoints: [
      { id: 'p-14', name: 'Riverfront Plaza', time: '03:15 PM', location: 'Riverfront North Gate', employeeCount: 6, order: 1 }
    ],
    assignedEmployeesCount: 6,
    assignedVehicleId: 'veh-308',
    assignedVehicleNumber: 'SUV-301',
    assignedDriverId: 'drv-208',
    assignedDriverName: 'George Thorne',
    pickupTime: '03:15 PM',
    dropTime: '03:50 PM',
    status: 'Active',
    distanceKm: 18.0,
    estimatedMinutes: 35
  },
  {
    id: 'rt-109',
    name: 'Westside Tech Connector',
    code: 'R-WEST-09',
    startLocation: 'Westside Transit Hub',
    destination: '36Route Tech Park HQ',
    pickupPoints: [
      { id: 'p-15', name: 'Westside Transit Gate B', time: '07:30 AM', location: 'Westside Transit Depot', employeeCount: 22, order: 1 }
    ],
    assignedEmployeesCount: 22,
    assignedVehicleId: 'veh-309',
    assignedVehicleNumber: 'BUS-106',
    assignedDriverId: 'drv-209',
    assignedDriverName: 'Antonio Rossi',
    pickupTime: '07:30 AM',
    dropTime: '08:25 AM',
    status: 'Inactive',
    distanceKm: 22.8,
    estimatedMinutes: 55
  },
  {
    id: 'rt-110',
    name: 'Executive Campus Shuttle',
    code: 'R-EXEC-10',
    startLocation: 'Grand Central Hotel',
    destination: 'Executive Innovation Center',
    pickupPoints: [
      { id: 'p-16', name: 'Grand Central Hotel Entrance', time: '08:45 AM', location: 'Grand Ave #100', employeeCount: 11, order: 1 }
    ],
    assignedEmployeesCount: 11,
    assignedVehicleId: 'veh-310',
    assignedVehicleNumber: 'VAN-401',
    assignedDriverId: 'drv-210',
    assignedDriverName: 'Harrison Blake',
    pickupTime: '08:45 AM',
    dropTime: '09:15 AM',
    status: 'Active',
    distanceKm: 10.5,
    estimatedMinutes: 30
  }
];

export const MOCK_TRIPS: Trip[] = [
  {
    id: 'trp-501',
    tripCode: 'TRIP-2026-0902-01',
    routeId: 'rt-101',
    routeName: 'Tech Park Shuttle North',
    vehicleId: 'veh-301',
    vehicleNumber: 'BUS-101',
    driverId: 'drv-201',
    driverName: 'Robert Vance',
    passengerCount: 32,
    maxCapacity: 45,
    departureTime: '07:15 AM',
    estimatedArrivalTime: '08:15 AM',
    status: 'Active',
    type: 'Pickup',
    shiftName: 'Morning Shift',
    progressPercent: 70,
    pickupPoints: MOCK_ROUTES[0].pickupPoints,
    passengers: [
      { employeeId: 'EMP-0101', employeeName: 'David Miller', pickupPoint: 'Central Square Bus Stop', status: 'Boarded' },
      { employeeId: 'EMP-0104', employeeName: 'Emma Watson', pickupPoint: 'Sunset Boulevard Corner', status: 'Boarded' },
      { employeeId: 'EMP-0106', employeeName: 'Olivia Taylor', pickupPoint: 'Central Square Bus Stop', status: 'Boarded' },
      { employeeId: 'EMP-0114', employeeName: 'Charlotte Walker', pickupPoint: 'Sunset Boulevard Corner', status: 'Pending' }
    ]
  },
  {
    id: 'trp-502',
    tripCode: 'TRIP-2026-0902-02',
    routeId: 'rt-102',
    routeName: 'Silicon Express South',
    vehicleId: 'veh-302',
    vehicleNumber: 'BUS-102',
    driverId: 'drv-202',
    driverName: 'Marcus Sterling',
    passengerCount: 40,
    maxCapacity: 45,
    departureTime: '07:10 AM',
    estimatedArrivalTime: '08:25 AM',
    status: 'Delayed',
    type: 'Pickup',
    shiftName: 'Morning Shift',
    progressPercent: 45,
    pickupPoints: MOCK_ROUTES[1].pickupPoints,
    passengers: [
      { employeeId: 'EMP-0102', employeeName: 'Sophia Chen', pickupPoint: 'West End Metro Station', status: 'Boarded' },
      { employeeId: 'EMP-0108', employeeName: 'Ava Martinez', pickupPoint: 'West End Metro Station', status: 'Boarded' },
      { employeeId: 'EMP-0120', employeeName: 'Evelyn Scott', pickupPoint: 'West End Metro Station', status: 'Pending' }
    ]
  },
  {
    id: 'trp-503',
    tripCode: 'TRIP-2026-0902-03',
    routeId: 'rt-104',
    routeName: 'Airport Corridor East',
    vehicleId: 'veh-304',
    vehicleNumber: 'BUS-103',
    driverId: 'drv-204',
    driverName: 'Viktor Kowalski',
    passengerCount: 42,
    maxCapacity: 50,
    departureTime: '07:05 AM',
    estimatedArrivalTime: '08:10 AM',
    status: 'Active',
    type: 'Pickup',
    shiftName: 'Morning Shift',
    progressPercent: 85,
    pickupPoints: MOCK_ROUTES[3].pickupPoints,
    passengers: [
      { employeeId: 'EMP-0105', employeeName: 'Liam Neeson', pickupPoint: 'Oakridge Heights Gate 2', status: 'Boarded' },
      { employeeId: 'EMP-0115', employeeName: 'Logan Hall', pickupPoint: 'Oakridge Heights Gate 2', status: 'Boarded' }
    ]
  },
  {
    id: 'trp-504',
    tripCode: 'TRIP-2026-0902-04',
    routeId: 'rt-110',
    routeName: 'Executive Campus Shuttle',
    vehicleId: 'veh-310',
    vehicleNumber: 'VAN-401',
    driverId: 'drv-210',
    driverName: 'Harrison Blake',
    passengerCount: 11,
    maxCapacity: 14,
    departureTime: '08:45 AM',
    estimatedArrivalTime: '09:15 AM',
    status: 'Active',
    type: 'Pickup',
    shiftName: 'Executive Shift',
    progressPercent: 30,
    pickupPoints: MOCK_ROUTES[9].pickupPoints,
    passengers: []
  },
  {
    id: 'trp-505',
    tripCode: 'TRIP-2026-0902-05',
    routeId: 'rt-103',
    routeName: 'Financial Hub Loop',
    vehicleId: 'veh-303',
    vehicleNumber: 'MINI-201',
    driverId: 'drv-203',
    driverName: 'Carlos Mendez',
    passengerCount: 15,
    maxCapacity: 20,
    departureTime: '08:15 AM',
    estimatedArrivalTime: '09:00 AM',
    status: 'Upcoming',
    type: 'Pickup',
    shiftName: 'General Shift',
    progressPercent: 0,
    pickupPoints: MOCK_ROUTES[2].pickupPoints,
    passengers: []
  },
  {
    id: 'trp-506',
    tripCode: 'TRIP-2026-0902-06',
    routeId: 'rt-105',
    routeName: 'Metro Connect Direct',
    vehicleId: 'veh-305',
    vehicleNumber: 'MINI-202',
    driverId: 'drv-205',
    driverName: 'Arthur Pendelton',
    passengerCount: 14,
    maxCapacity: 18,
    departureTime: '08:20 AM',
    estimatedArrivalTime: '08:50 AM',
    status: 'Upcoming',
    type: 'Pickup',
    shiftName: 'General Shift',
    progressPercent: 0,
    pickupPoints: MOCK_ROUTES[4].pickupPoints,
    passengers: []
  },
  {
    id: 'trp-507',
    tripCode: 'TRIP-2026-0901-07',
    routeId: 'rt-101',
    routeName: 'Tech Park Shuttle North',
    vehicleId: 'veh-301',
    vehicleNumber: 'BUS-101',
    driverId: 'drv-201',
    driverName: 'Robert Vance',
    passengerCount: 35,
    maxCapacity: 45,
    departureTime: '05:15 PM',
    estimatedArrivalTime: '06:15 PM',
    actualArrivalTime: '06:12 PM',
    status: 'Completed',
    type: 'Drop',
    shiftName: 'Evening Return',
    progressPercent: 100,
    pickupPoints: MOCK_ROUTES[0].pickupPoints,
    passengers: []
  },
  {
    id: 'trp-508',
    tripCode: 'TRIP-2026-0901-08',
    routeId: 'rt-102',
    routeName: 'Silicon Express South',
    vehicleId: 'veh-302',
    vehicleNumber: 'BUS-102',
    driverId: 'drv-202',
    driverName: 'Marcus Sterling',
    passengerCount: 41,
    maxCapacity: 45,
    departureTime: '05:15 PM',
    estimatedArrivalTime: '06:30 PM',
    actualArrivalTime: '06:28 PM',
    status: 'Completed',
    type: 'Drop',
    shiftName: 'Evening Return',
    progressPercent: 100,
    pickupPoints: MOCK_ROUTES[1].pickupPoints,
    passengers: []
  },
  {
    id: 'trp-509',
    tripCode: 'TRIP-2026-0901-09',
    routeId: 'rt-108',
    routeName: 'Riverside Night Shift Express',
    vehicleId: 'veh-308',
    vehicleNumber: 'SUV-301',
    driverId: 'drv-208',
    driverName: 'George Thorne',
    passengerCount: 6,
    maxCapacity: 7,
    departureTime: '03:15 PM',
    estimatedArrivalTime: '03:50 PM',
    actualArrivalTime: '03:48 PM',
    status: 'Completed',
    type: 'Pickup',
    shiftName: 'Night Shift',
    progressPercent: 100,
    pickupPoints: MOCK_ROUTES[7].pickupPoints,
    passengers: []
  },
  {
    id: 'trp-510',
    tripCode: 'TRIP-2026-0901-10',
    routeId: 'rt-109',
    routeName: 'Westside Tech Connector',
    vehicleId: 'veh-309',
    vehicleNumber: 'BUS-106',
    driverId: 'drv-209',
    driverName: 'Antonio Rossi',
    passengerCount: 0,
    maxCapacity: 40,
    departureTime: '07:30 AM',
    estimatedArrivalTime: '08:25 AM',
    status: 'Cancelled',
    type: 'Pickup',
    shiftName: 'Morning Shift',
    progressPercent: 0,
    pickupPoints: MOCK_ROUTES[8].pickupPoints,
    passengers: []
  }
];

export const MOCK_LIVE_LOCATIONS: LiveVehicleLocation[] = [
  { vehicleId: 'veh-301', vehicleNumber: 'BUS-101', driverName: 'Robert Vance', routeName: 'Tech Park Shuttle North', status: 'On Time', speedKmH: 48, eta: '08:15 AM', lat: 37.7749, lng: -122.4194, nextStop: '36Route Tech Park HQ', batteryOrFuel: 82 },
  { vehicleId: 'veh-302', vehicleNumber: 'BUS-102', driverName: 'Marcus Sterling', routeName: 'Silicon Express South', status: 'Delayed', speedKmH: 22, eta: '08:35 AM (+15m)', lat: 37.7833, lng: -122.4167, nextStop: 'South Bay Mall Gate 1', batteryOrFuel: 68 },
  { vehicleId: 'veh-304', vehicleNumber: 'BUS-103', driverName: 'Viktor Kowalski', routeName: 'Airport Corridor East', status: 'On Time', speedKmH: 54, eta: '08:10 AM', lat: 37.7650, lng: -122.4300, nextStop: '36Route Tech Park HQ', batteryOrFuel: 74 },
  { vehicleId: 'veh-310', vehicleNumber: 'VAN-401', driverName: 'Harrison Blake', routeName: 'Executive Campus Shuttle', status: 'On Time', speedKmH: 35, eta: '09:15 AM', lat: 37.7900, lng: -122.4000, nextStop: 'Grand Central Hotel Entrance', batteryOrFuel: 91 },
  { vehicleId: 'veh-303', vehicleNumber: 'MINI-201', driverName: 'Carlos Mendez', routeName: 'Financial Hub Loop', status: 'Stopped', speedKmH: 0, eta: '09:00 AM', lat: 37.7550, lng: -122.4100, nextStop: 'Green Valley Apartments', batteryOrFuel: 95 },
  { vehicleId: 'veh-309', vehicleNumber: 'BUS-106', driverName: 'Antonio Rossi', routeName: 'Westside Tech Connector', status: 'Offline', speedKmH: 0, eta: 'N/A', lat: 37.7400, lng: -122.4500, nextStop: 'Depot Maintenance', batteryOrFuel: 30 }
];

export const MOCK_SAFETY_ALERTS: SafetyAlert[] = [
  { id: 'alt-701', type: 'Speed Violation', severity: 'High', vehicleId: 'veh-302', vehicleNumber: 'BUS-102', driverId: 'drv-202', driverName: 'Marcus Sterling', location: 'South Bay Expressway Mile 12', timestamp: '10 mins ago', status: 'Active', description: 'Vehicle exceeded speed limit (88 km/h in 65 km/h zone) for over 3 minutes.' },
  { id: 'alt-702', type: 'Route Deviation', severity: 'Medium', vehicleId: 'veh-304', vehicleNumber: 'BUS-103', driverId: 'drv-204', driverName: 'Viktor Kowalski', location: 'Oakridge Bypass Road', timestamp: '24 mins ago', status: 'Acknowledged', description: 'Driver deviated from designated route by 1.8 km due to road construction.' },
  { id: 'alt-703', type: 'SOS', severity: 'High', vehicleId: 'veh-308', vehicleNumber: 'SUV-301', driverId: 'drv-208', driverName: 'George Thorne', location: 'Riverfront Plaza Exit Gate', timestamp: '1 hour ago', status: 'Resolved', description: 'Driver triggered SOS button. Confirmed false alarm during test.' },
  { id: 'alt-704', type: 'Vehicle Breakdown', severity: 'High', vehicleId: 'veh-309', vehicleNumber: 'BUS-106', driverId: 'drv-209', driverName: 'Antonio Rossi', location: 'Westside Highway Junction 4', timestamp: '3 hours ago', status: 'Resolved', description: 'Coolant temperature warning triggered. Vehicle towed to maintenance.' },
  { id: 'alt-705', type: 'Panic Button', severity: 'High', vehicleId: 'veh-301', vehicleNumber: 'BUS-101', driverId: 'drv-201', driverName: 'Robert Vance', location: 'Central Square Station', timestamp: 'Yesterday', status: 'Resolved', description: 'Passenger panic button pressed. Resolved by driver after onboard check.' },
  { id: 'alt-706', type: 'Speed Violation', severity: 'Low', vehicleId: 'veh-307', vehicleNumber: 'BUS-105', driverId: 'drv-207', driverName: 'Dmitri Ivanov', location: 'Highland Park Ave', timestamp: 'Yesterday', status: 'Resolved', description: 'Minor speed overage (55 km/h in 50 km/h zone).' }
];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  { id: 'notif-1', title: 'Vehicle BUS-102 Delayed', message: 'BUS-102 on Silicon Express South is delayed by 15 minutes due to heavy traffic on South Bay Expressway.', timestamp: '5 mins ago', read: false, category: 'Delays' },
  { id: 'notif-2', title: 'Speed Violation Alert', message: 'High severity speed violation reported for vehicle BUS-102 driven by Marcus Sterling.', timestamp: '10 mins ago', read: false, category: 'Safety' },
  { id: 'notif-3', title: 'Trip Completed', message: 'Morning shift pickup for Tech Park Shuttle North (BUS-101) reached final destination.', timestamp: '25 mins ago', read: true, category: 'Trips' },
  { id: 'notif-4', title: 'Route Created', message: 'New route "Executive Campus Shuttle" (R-EXEC-10) has been assigned to driver Harrison Blake.', timestamp: '2 hours ago', read: true, category: 'System' },
  { id: 'notif-5', title: 'Vehicle Service Due', message: 'Vehicle BUS-106 is scheduled for routine 10,000 km maintenance tomorrow.', timestamp: '4 hours ago', read: true, category: 'System' },
  { id: 'notif-6', title: 'Driver Safety Score Update', message: 'Robert Vance achieved a 98/100 safety rating for August 2026.', timestamp: '1 day ago', read: true, category: 'Safety' }
];

export const MOCK_SCHEDULES: Schedule[] = [
  { id: 'sch-1', employeeId: 'EMP-0101', employeeName: 'David Miller', department: 'Engineering', shiftName: 'Morning Pickup', shiftTime: '07:15 AM - 08:15 AM', type: 'Pickup', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], status: 'Active' },
  { id: 'sch-2', employeeId: 'EMP-0102', employeeName: 'Sophia Chen', department: 'Product', shiftName: 'Morning Pickup', shiftTime: '07:10 AM - 08:20 AM', type: 'Pickup', routeId: 'rt-102', routeName: 'Silicon Express South', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], status: 'Active' },
  { id: 'sch-3', employeeId: 'EMP-0103', employeeName: 'James Wilson', department: 'Finance', shiftName: 'General Pickup', shiftTime: '08:15 AM - 09:00 AM', type: 'Pickup', routeId: 'rt-103', routeName: 'Financial Hub Loop', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], status: 'Active' },
  { id: 'sch-4', employeeId: 'EMP-0116', employeeName: 'Harper Allen', department: 'Engineering', shiftName: 'Night Shift Pickup', shiftTime: '03:15 PM - 03:50 PM', type: 'Pickup', routeId: 'rt-108', routeName: 'Riverside Night Shift Express', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], status: 'Active' }
];

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { id: 'att-1', date: '2026-09-02', employeeId: 'EMP-0101', employeeName: 'David Miller', department: 'Engineering', routeId: 'rt-101', routeName: 'Tech Park Shuttle North', status: 'Present', pickupTime: '07:15 AM', actualTime: '07:16 AM', pickupPoint: 'Central Square Bus Stop' },
  { id: 'att-2', date: '2026-09-02', employeeId: 'EMP-0102', employeeName: 'Sophia Chen', department: 'Product', routeId: 'rt-102', routeName: 'Silicon Express South', status: 'Late Pickup', pickupTime: '07:10 AM', actualTime: '07:25 AM', pickupPoint: 'West End Metro Station' },
  { id: 'att-3', date: '2026-09-02', employeeId: 'EMP-0103', employeeName: 'James Wilson', department: 'Finance', routeId: 'rt-103', routeName: 'Financial Hub Loop', status: 'Present', pickupTime: '08:15 AM', actualTime: '08:14 AM', pickupPoint: 'Green Valley Apartments' },
  { id: 'att-4', date: '2026-09-02', employeeId: 'EMP-0110', employeeName: 'Mia Clark', department: 'Quality Assurance', routeId: 'rt-103', routeName: 'Financial Hub Loop', status: 'Absent', pickupTime: '08:15 AM', actualTime: '-', pickupPoint: 'Green Valley Apartments' },
  { id: 'att-5', date: '2026-09-02', employeeId: 'EMP-0125', employeeName: 'Jack Nelson', department: 'Operations', routeId: 'rt-104', routeName: 'Airport Corridor East', status: 'No-Show', pickupTime: '07:05 AM', actualTime: '-', pickupPoint: 'Oakridge Heights Gate 2' }
];
