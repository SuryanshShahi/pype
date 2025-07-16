import React from "react";

const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="uppercase bg-brand-solid text-sm text-white px-6 py-1 rounded-full">
      {children}
    </div>
  );
};

export default Chip;
