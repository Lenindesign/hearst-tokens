'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export function Toast({ message, isVisible, onHide }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onHide, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <div
      className={`fixed bottom-8 left-1/2 bg-[#121212] text-white px-6 py-3 rounded-lg text-[0.875rem] z-[1000] transition-all duration-300 ${
        isVisible
          ? '-translate-x-1/2 translate-y-0 opacity-100'
          : '-translate-x-1/2 translate-y-[100px] opacity-0 pointer-events-none'
      }`}
    >
      {message}
    </div>
  );
}
