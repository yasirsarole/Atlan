import { useEffect, useState, useMemo } from "react";

import { customerRowData, customerColDef } from "./data/customers";
import { ordersRowData, ordersColDef } from "./data/orders";
import { outputRowData, outputColDef } from "./data/output";

import AvailableTables from "./sections/AvailableTables";
import Input from "./sections/Input";
import Output from "./sections/Output";

const App = () => {
  const [customerData, setCustomerData] = useState({
    rowData: customerRowData,
    colDef: customerColDef,
    tableName: "Customers",
  });
  const [ordersData, setOrdersData] = useState({
    rowData: ordersRowData,
    colDef: ordersColDef,
    tableName: "Orders",
  });
  const [queries, setQueries] = useState(
    "SELECT customer_id, customer_name FROM Customers;"
  );
  const [outputData, setOutputData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    outputDataHandler();
  }, []);

  const onQueryChange = (e) => {
    setQueries(e.target.value);
  };

  const outputDataHandler = () => {
    const outputTableCount = queries.split(";").filter((q) => q.trim()).length;
    setOutputData(
      new Array(outputTableCount).fill({
        rowData: outputRowData,
        colDef: outputColDef,
      })
    );
  };

  const runSQLQueryHandler = () => {
    setLoader(true);

    let timer = setTimeout(() => {
      setLoader(false);
      outputDataHandler();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  const memoizedOutputData = useMemo(() => outputData, [outputData]);

  return (
    <div className="App p-[10px] flex justify-between">
      <div className="p-[20px] w-[55%] h-[calc(100vh-20px)]">
        <Input
          queries={queries}
          onQueryChange={onQueryChange}
          runSQLQueryHandler={runSQLQueryHandler}
        />
        <Output outputData={memoizedOutputData} loader={loader} />
      </div>
      <AvailableTables tables={[customerData, ordersData]} />
    </div>
  );
};

export default App;
