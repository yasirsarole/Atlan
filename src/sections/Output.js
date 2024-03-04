import React from "react";
import Table from "../components/Table/Table";

const Output = React.memo(({ outputData, loader }) => {
  return (
    <div>
      <span className="mb-[20px] inline-block underline font-bold text-lg">
        Output: {!!outputData && outputData.length ? outputData.length : ""}
      </span>
      <div className="max-h-[300px] overflow-auto pr-[20px]">
        {loader ? (
          <span>Executing your query...</span>
        ) : outputData && outputData.length > 0 ? (
          outputData.map((table, i) => (
            <div key={i} className="mb-[10px]">
              <Table rowData={table.rowData} columnDefs={table.colDef} />
            </div>
          ))
        ) : (
          <span>
            SQL query successfully executed. However, the result set is empty.
          </span>
        )}
      </div>
    </div>
  );
});

export default Output;
