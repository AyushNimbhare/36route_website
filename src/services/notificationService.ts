import { NotificationItem } from '../types';
import { MOCK_NOTIFICATIONS } from '../data/mockData';

let notificationsStore: NotificationItem[] = [...MOCK_NOTIFICATIONS];

export const notificationService = {
  getNotifications(): Promise<NotificationItem[]> {
    return Promise.resolve([...notificationsStore]);
  },
  markAsRead(id: string): Promise<void> {
    notificationsStore = notificationsStore.map(n => n.id === id ? { ...n, read: true } : n);
    return Promise.resolve();
  },
  markAllAsRead(): Promise<void> {
    notificationsStore = notificationsStore.map(n => ({ ...n, read: true }));
    return Promise.resolve();
  },
  clearAll(): Promise<void> {
    notificationsStore = [];
    return Promise.resolve();
  }
};
