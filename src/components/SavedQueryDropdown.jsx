import React from "react";

const SavedQueryDropdown = ({ savedQueries, handleSavedQueryOnChange }) => {
  return (
    <div className="mb-[10px] flex items-center">
      <span className="underline font-bold mr-[10px]">Saved Queries:</span>
      {savedQueries ? (
        <select
          onChange={handleSavedQueryOnChange}
          className="text-sm block appearance-none w-[200px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select...</option>
          {Object.keys(savedQueries).map((query) => (
            <option key={query} value={query}>
              {query}
            </option>
          ))}
        </select>
      ) : (
        <span className="text-sm">Currently, there are no saved queries.</span>
      )}
    </div>
  );
};

export default SavedQueryDropdown;
