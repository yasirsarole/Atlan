import React from "react";
import SavedQueryDropdown from "../components/SavedQueryDropdown";

const Input = React.memo(
  ({
    queries,
    onQueryChange,
    runSQLQueryHandler,
    savedQueries,
    handleSavedQueryOnChange,
  }) => {
    return (
      <div className="pb-[15px] mb-[15px] border-b-[2px] border-black">
        <div className="flex mb-[10px] justify-between align-center">
          <span className="inline-block underline font-bold text-lg">
            Input
          </span>
          <button
            onClick={runSQLQueryHandler}
            className="py-[5px] px-[10px] text-white bg-sky-900 rounded-md drop-shadow-lg"
          >
            Run SQL
          </button>
        </div>
        <SavedQueryDropdown
          savedQueries={savedQueries}
          handleSavedQueryOnChange={handleSavedQueryOnChange}
        />
        <ul className="text-xs text-red-500 mb-[10px]">
          <li>--- Online SQL editor to run SQL online.</li>
          <li>
            --- Use the editor to create new tables, insert data and all other
            SQL operations.
          </li>
        </ul>
        <textarea
          className="w-[100%] border-[1px] border-solid p-[5px] text-sm"
          rows={4}
          value={queries}
          onChange={onQueryChange}
        />
      </div>
    );
  }
);

export default Input;
