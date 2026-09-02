import {
  Route,
  Trip,
  Vehicle,
  Driver,
  LiveVehicleLocation,
  Schedule,
  AttendanceRecord
} from '../types';
import {
  MOCK_ROUTES,
  MOCK_TRIPS,
  MOCK_VEHICLES,
  MOCK_DRIVERS,
  MOCK_LIVE_LOCATIONS,
  MOCK_SCHEDULES,
  MOCK_ATTENDANCE
} from '../data/mockData';

let routesStore: Route[] = [...MOCK_ROUTES];
let tripsStore: Trip[] = [...MOCK_TRIPS];
let vehiclesStore: Vehicle[] = [...MOCK_VEHICLES];
let driversStore: Driver[] = [...MOCK_DRIVERS];
let liveLocationsStore: LiveVehicleLocation[] = [...MOCK_LIVE_LOCATIONS];
let schedulesStore: Schedule[] = [...MOCK_SCHEDULES];
let attendanceStore: AttendanceRecord[] = [...MOCK_ATTENDANCE];

export const fleetService = {
  // Routes
  getRoutes(): Promise<Route[]> {
    return Promise.resolve([...routesStore]);
  },
  getRouteById(id: string): Promise<Route | undefined> {
    return Promise.resolve(routesStore.find(r => r.id === id));
  },
  createRoute(newRoute: Omit<Route, 'id'>): Promise<Route> {
    const created: Route = {
      ...newRoute,
      id: `rt-${Date.now()}`
    };
    routesStore = [created, ...routesStore];
    return Promise.resolve(created);
  },

  // Trips
  getTrips(): Promise<Trip[]> {
    return Promise.resolve([...tripsStore]);
  },
  getTripById(id: string): Promise<Trip | undefined> {
    return Promise.resolve(tripsStore.find(t => t.id === id));
  },

  // Vehicles
  getVehicles(): Promise<Vehicle[]> {
    return Promise.resolve([...vehiclesStore]);
  },
  getVehicleById(id: string): Promise<Vehicle | undefined> {
    return Promise.resolve(vehiclesStore.find(v => v.id === id));
  },

  // Drivers
  getDrivers(): Promise<Driver[]> {
    return Promise.resolve([...driversStore]);
  },
  getDriverById(id: string): Promise<Driver | undefined> {
    return Promise.resolve(driversStore.find(d => d.id === id));
  },

  // Live Tracking
  getLiveVehicleLocations(): Promise<LiveVehicleLocation[]> {
    return Promise.resolve([...liveLocationsStore]);
  },

  // Schedules
  getSchedules(): Promise<Schedule[]> {
    return Promise.resolve([...schedulesStore]);
  },

  // Attendance
  getAttendance(): Promise<AttendanceRecord[]> {
    return Promise.resolve([...attendanceStore]);
  }
};
