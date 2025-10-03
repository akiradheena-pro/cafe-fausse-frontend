import React from 'react';

const Availability = ({ data }) => {
  if (!data) {
    return null; // Don't render anything if there's no data yet
  }

  const { available, totalTables } = data;
  const isAvailable = available > 0;

  const textColor = isAvailable ? 'text-green-700' : 'text-red-700';
  const bgColor = isAvailable ? 'bg-green-50' : 'bg-red-50';
  const borderColor = isAvailable ? 'border-green-200' : 'border-red-200';

  return (
    <div className={`p-4 mt-6 mb-2 rounded-lg border ${bgColor} ${borderColor} text-center`}>
      <p className={`font-semibold ${textColor}`}>
        {isAvailable
          ? `${available} of ${totalTables} tables available.`
          : 'Sorry, this time slot is fully booked.'}
      </p>
    </div>
  );
};

export default Availability;