import { Employee } from '../types';
import { MOCK_EMPLOYEES } from '../data/mockData';

let employeesStore: Employee[] = [...MOCK_EMPLOYEES];

export const employeeService = {
  getEmployees(): Promise<Employee[]> {
    return Promise.resolve([...employeesStore]);
  },
  getEmployeeById(id: string): Promise<Employee | undefined> {
    return Promise.resolve(employeesStore.find(e => e.id === id));
  },
  createEmployee(newEmp: Omit<Employee, 'id' | 'createdAt'>): Promise<Employee> {
    const created: Employee = {
      ...newEmp,
      id: `emp-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0]
    };
    employeesStore = [created, ...employeesStore];
    return Promise.resolve(created);
  },
  updateEmployee(id: string, updates: Partial<Employee>): Promise<Employee | undefined> {
    const idx = employeesStore.findIndex(e => e.id === id);
    if (idx !== -1) {
      employeesStore[idx] = { ...employeesStore[idx], ...updates };
      return Promise.resolve(employeesStore[idx]);
    }
    return Promise.resolve(undefined);
  }
};
