import React from 'react';

interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <span className="pill bg-blue-500 text-white py-2 px-4 rounded">
      {label}
    </span>
  );
}

export default Pill;
