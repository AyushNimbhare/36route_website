import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading data...'
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center text-slate-500">
      <Loader2 className="w-6 h-6 animate-spin text-slate-700 mb-2" />
      <p className="text-xs font-medium">{message}</p>
    </div>
  );
};
