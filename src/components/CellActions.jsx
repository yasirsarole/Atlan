import React from "react";

const CellActions = () => {
  return (
    <div className="flex">
      <span className="mr-[10px] hover:underline cursor-pointer">Edit</span>
      <span className="mr-[10px]">|</span>
      <span className="hover:underline cursor-pointer">Delete</span>
    </div>
  );
};

export default CellActions;
