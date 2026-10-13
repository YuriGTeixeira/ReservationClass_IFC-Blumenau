import React from 'react';

interface ReservationBadgeProps {
  time: string;
  user?: string;
  status?: 'booked' | 'blocked';
}

export function ReservationBadge({ time, user, status = 'booked' }: ReservationBadgeProps) {
  const styles = {
    booked: 'bg-teal-700 text-white',
    blocked: 'bg-rose-800 text-white',
  };

  return (
    <div className={`text-xs px-3 py-1.5 rounded shadow-sm flex items-center gap-1 ${styles[status]}`}>
      <span>🕒</span>
      <span>{time} {user && user}</span>
    </div>
  );
}