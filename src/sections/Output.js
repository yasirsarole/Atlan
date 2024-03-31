import React, { useMemo } from "react";
import Table from "../components/Table/Table";

const Output = React.memo(({ outputData, loader }) => {
  const OutputLength = useMemo(() => {
    return !!outputData && outputData.length ? outputData.length : "";
  }, [outputData]);

  return (
    <div>
      <div className="flex justify-between">
        <span className="inline-block underline font-bold text-lg">
          Output:
        </span>
        {!!(outputData && outputData.length) && (
          <button className="py-[5px] px-[10px] text-white bg-lime-800 rounded-md drop-shadow-lg">
            Export Result
          </button>
        )}
      </div>
      <div className="max-h-[350px] overflow-auto pr-[20px]">
        {loader ? (
          <span>Executing your query...</span>
        ) : outputData && outputData.length > 0 ? (
          <div>
            <div className="mb-[10px] flex">
              <span className="mr-[10px] text-sm font-bold underline">
                Action O/P:
              </span>
              <span className="text-sm mr-[10px]">{`${OutputLength} table/s returned,`}</span>
              <span className="text-sm mr-[10px]">{`${
                OutputLength * 8
              } rows returned,`}</span>
              <span className="text-sm">{`Execution Time: ${
                0.04 * OutputLength
              }s`}</span>
            </div>
            {outputData.map((table, i) => (
              <div key={i} className="mb-[10px]">
                <Table rowData={table.rowData} columnDefs={table.colDef} />
              </div>
            ))}
          </div>
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
