export type UserRole = 
  | 'ADMIN'
  | 'TRANSPORT_MANAGER'
  | 'HR'
  | 'CONTROL_ROOM'
  | 'DRIVER'
  | 'EMPLOYEE';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  avatarUrl?: string;
  phone?: string;
}

export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  pickupPoint: string;
  routeId: string;
  routeName: string;
  shift: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  assignedVehicleNumber?: string;
  createdAt: string;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  licenseNumber: string;
  licenseExpiry: string;
  assignedVehicleId?: string;
  assignedVehicleNumber?: string;
  assignedRouteId?: string;
  assignedRouteName?: string;
  activeTripsCount: number;
  safetyScore: number; // 0 - 100
  status: 'Active' | 'On Trip' | 'On Break' | 'Off Duty' | 'Suspended';
  photoUrl?: string;
  joinedDate: string;
}

export type VehicleStatus = 'Available' | 'On Trip' | 'Maintenance' | 'Offline';
export type VehicleType = 'Bus' | 'Minibus' | 'SUV' | 'Sedan';

export interface Vehicle {
  id: string;
  vehicleNumber: string;
  model: string;
  type: VehicleType;
  capacity: number;
  currentPassengers: number;
  assignedDriverId?: string;
  assignedDriverName?: string;
  status: VehicleStatus;
  fuelLevel: number; // 0 - 100
  lastServiceDate: string;
  insuranceExpiry: string;
}

export interface PickupPoint {
  id: string;
  name: string;
  time: string;
  location: string;
  employeeCount: number;
  order: number;
}

export interface Route {
  id: string;
  name: string;
  code: string;
  startLocation: string;
  destination: string;
  pickupPoints: PickupPoint[];
  assignedEmployeesCount: number;
  assignedVehicleId?: string;
  assignedVehicleNumber?: string;
  assignedDriverId?: string;
  assignedDriverName?: string;
  pickupTime: string;
  dropTime: string;
  status: 'Active' | 'Inactive' | 'Pending';
  distanceKm: number;
  estimatedMinutes: number;
}

export type TripStatus = 'Active' | 'Upcoming' | 'Completed' | 'Cancelled' | 'Delayed';

export interface PassengerStatus {
  employeeId: string;
  employeeName: string;
  pickupPoint: string;
  status: 'Boarded' | 'Pending' | 'Missed' | 'Dropped';
}

export interface Trip {
  id: string;
  tripCode: string;
  routeId: string;
  routeName: string;
  vehicleId: string;
  vehicleNumber: string;
  driverId: string;
  driverName: string;
  passengerCount: number;
  maxCapacity: number;
  departureTime: string;
  estimatedArrivalTime: string;
  actualArrivalTime?: string;
  status: TripStatus;
  type: 'Pickup' | 'Drop';
  shiftName: string;
  pickupPoints: PickupPoint[];
  passengers: PassengerStatus[];
  progressPercent?: number;
}

export interface LiveVehicleLocation {
  vehicleId: string;
  vehicleNumber: string;
  driverName: string;
  routeName: string;
  status: 'On Time' | 'Delayed' | 'Stopped' | 'Offline';
  speedKmH: number;
  eta: string;
  lat: number;
  lng: number;
  nextStop: string;
  batteryOrFuel: number;
}

export interface Schedule {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  shiftName: string;
  shiftTime: string;
  type: 'Pickup' | 'Drop';
  routeId: string;
  routeName: string;
  days: string[];
  status: 'Active' | 'Suspended';
}

export interface AttendanceRecord {
  id: string;
  date: string;
  employeeId: string;
  employeeName: string;
  department: string;
  routeId: string;
  routeName: string;
  status: 'Present' | 'Absent' | 'No-Show' | 'Late Pickup';
  pickupTime: string;
  actualTime: string;
  pickupPoint: string;
}

export type SafetyAlertSeverity = 'High' | 'Medium' | 'Low';
export type SafetyAlertStatus = 'Active' | 'Acknowledged' | 'Resolved';
export type SafetyAlertType = 'SOS' | 'Speed Violation' | 'Route Deviation' | 'Vehicle Breakdown' | 'Panic Button';

export interface SafetyAlert {
  id: string;
  type: SafetyAlertType;
  severity: SafetyAlertSeverity;
  vehicleId: string;
  vehicleNumber: string;
  driverId: string;
  driverName: string;
  location: string;
  timestamp: string;
  status: SafetyAlertStatus;
  description: string;
  coordinates?: { lat: number; lng: number };
}

export type NotificationCategory = 'All' | 'Delays' | 'Safety' | 'System' | 'Trips';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  category: NotificationCategory;
  link?: string;
}

export type ReportType = 
  | 'Trip Report'
  | 'Vehicle Utilization'
  | 'Driver Performance'
  | 'Employee Transportation'
  | 'Attendance'
  | 'Safety'
  | 'Route Efficiency';
