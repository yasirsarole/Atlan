import React from "react";

const Input = React.memo(({ queries, onQueryChange, runSQLQueryHandler }) => {
  return (
    <div className="mb-[20px]">
      <div className="flex mb-[20px] justify-between align-center">
        <span className="inline-block underline font-bold text-lg">Input</span>
        <button
          onClick={runSQLQueryHandler}
          className="py-[5px] px-[10px] text-white bg-sky-900 rounded-md drop-shadow-lg"
        >
          Run SQL
        </button>
      </div>
      <ul className="text-xs text-red-500 mb-[10px]">
        <li>--- Online SQL editor to run SQL online.</li>
        <li>
          --- Use the editor to create new tables, insert data and all other SQL
          operations.
        </li>
      </ul>
      <textarea
        className="w-[100%] border-[1px] border-solid p-[5px] text-sm"
        rows={10}
        value={queries}
        onChange={onQueryChange}
      />
    </div>
  );
});

export default Input;
