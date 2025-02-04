import React from 'react';
import { MenuButton } from '../MenuButton';

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <button
        className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        <MenuButton isOpen={true} color='#fff' />
      </button>
      <div className="w-full max-w-[80dvw] aspect-video select-none">
        {children}
      </div>
    </div>
  );
}