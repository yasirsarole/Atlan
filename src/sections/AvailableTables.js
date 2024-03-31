import React from "react";

import Table from "../components/Table/Table";
import CellActions from "../components/CellActions";

const AvailableTables = React.memo(
  ({ tables, onTableListClick, savedQueries }) => {
    return (
      tables.every((table) => table) && (
        <div className="h-[100%] flex justify-between flex-col">
          <div className="mb-[20px]">
            <span className="mb-[20px] inline-block underline font-bold text-lg">
              Available Tables
            </span>
            <ul>
              {tables.map((table) => {
                return (
                  <li
                    className="list-disc underline cursor-pointer hover:no-underline"
                    key={table.tableName}
                    onClick={() => onTableListClick(table.tableName)}
                  >
                    {table.tableName}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <span className="block mb-[10px] block underline font-bold text-lg">
              Saved Queries
            </span>
            {savedQueries ? (
              <Table
                rowData={Object.keys(savedQueries).map((queryName) => {
                  return {
                    "Query Name": queryName,
                  };
                })}
                columnDefs={[
                  { field: "Query Name", resizable: false },
                  {
                    field: "Actions",
                    resizable: false,
                    cellRenderer: CellActions,
                  },
                ]}
              />
            ) : (
              <span className="text-sm">
                Currently, there are no saved queries.
              </span>
            )}
          </div>
        </div>
      )
    );
  }
);

export default AvailableTables;
