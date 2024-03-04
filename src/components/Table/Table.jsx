import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./table.css";

const Table = ({ rowData, columnDefs }) => {
  const autoSizeStrategy = useMemo(() => {
    return {
      type: "fitGridWidth",
      defaultMinWidth: 100,
    };
  }, []);

  return (
    <div className="ag-theme-quartz mb-[30px]" style={{ height: 300 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={false}
        autoSizeStrategy={autoSizeStrategy}
      />
    </div>
  );
};

export default Table;
