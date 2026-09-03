import React, { createContext, useContext, useState } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = 'info') => {
    const id = `toast-${Date.now()}`;
    // Keep single active toast so it doesn't pile up on mobile
    setToasts([{ id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-5 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 flex justify-center sm:justify-end pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-slate-900/95 backdrop-blur-md shadow-2xl text-xs font-medium text-amber-200 animate-slideIn max-w-[92vw] sm:max-w-sm"
          >
            {toast.type === 'success' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />}
            {toast.type === 'info' && <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
            <span className="truncate">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-0.5 text-slate-400 hover:text-white rounded-full ml-1"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};
