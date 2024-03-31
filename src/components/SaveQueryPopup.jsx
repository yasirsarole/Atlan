import React from "react";

const SaveQueryPopup = ({
  saveQueryHandler,
  cancelQueryHandler,
  queryNameHandler,
  queryName,
}) => {
  return (
    <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[400px] p-[20px] border-[1px] border-gray-400 rounded-md flex  flex-col bg-gray-200">
      <span className="mb-[30px]">Do you wish to save the query?</span>
      <input
        className="mb-[50px] p-[5px]"
        type="text"
        placeholder="Query Name"
        onChange={queryNameHandler}
        value={queryName}
      />
      <div className="flex">
        <button
          className="py-[5px] px-[10px] text-white bg-sky-900 rounded-md drop-shadow-lg mr-[20px]"
          onClick={saveQueryHandler}
        >
          Save
        </button>
        <button
          className="py-[5px] px-[10px] text-white bg-red-500 rounded-md drop-shadow-lg"
          onClick={cancelQueryHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SaveQueryPopup;
