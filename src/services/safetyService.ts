import { SafetyAlert, SafetyAlertStatus } from '../types';
import { MOCK_SAFETY_ALERTS } from '../data/mockData';

let safetyAlertsStore: SafetyAlert[] = [...MOCK_SAFETY_ALERTS];

export const safetyService = {
  getAlerts(): Promise<SafetyAlert[]> {
    return Promise.resolve([...safetyAlertsStore]);
  },
  updateAlertStatus(id: string, status: SafetyAlertStatus): Promise<SafetyAlert | undefined> {
    const idx = safetyAlertsStore.findIndex(a => a.id === id);
    if (idx !== -1) {
      safetyAlertsStore[idx] = { ...safetyAlertsStore[idx], status };
      return Promise.resolve(safetyAlertsStore[idx]);
    }
    return Promise.resolve(undefined);
  }
};
