import React from "react";
import Table from "../components/Table/Table";

const AvailableTables = React.memo(({ tables }) => {
  return (
    <div className="p-[20px] pr-0 border-[1px] rounded-md border-solid flex-1 border-black h-[calc(100vh-20px)]">
      <span className="mb-[20px] inline-block underline font-bold text-lg">
        Available Tables
      </span>
      <div className="max-h-[calc(100%-40px)] overflow-auto pr-[20px]">
        {tables.map((table) => {
          return (
            <div key={table.tableName}>
              <span className="mb-[5px] inline-block text-base font-bold">
                {table.tableName}
              </span>
              <Table rowData={table.rowData} columnDefs={table.colDef} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default AvailableTables;
