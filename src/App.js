import { useEffect, useState, useMemo } from "react";

import { customerRowData, customerColDef } from "./data/customers";
import { ordersRowData, ordersColDef } from "./data/orders";
import { outputRowData, outputColDef } from "./data/output";

import AvailableTables from "./sections/AvailableTables";
import Input from "./sections/Input";
import Output from "./sections/Output";
import Welcome from "./components/Welcome";
import SaveQueryPopup from "./components/SaveQueryPopup";

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

  const [categoriesData, setCategoriesData] = useState({
    rowData: ordersRowData,
    colDef: ordersColDef,
    tableName: "Categories",
  });

  const [productsData, setProductsData] = useState({
    rowData: ordersRowData,
    colDef: ordersColDef,
    tableName: "Products",
  });

  const [showSaveQueryPopUp, setShowSaveQueryPopUp] = useState(false);

  const [savedQueries, setSavedQueries] = useState(null);

  const [queryName, setQueryName] = useState("");

  const [queries, setQueries] = useState(
    "SELECT customer_id, customer_name FROM Customers;"
  );
  const [outputData, setOutputData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    outputDataHandler();
  }, []);

  useEffect(() => {
    setQueryName("");
  }, [savedQueries]);

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
    if (queries) {
      setShowSaveQueryPopUp(true);
    } else {
      sqlResultHandler();
    }
  };

  const sqlResultHandler = () => {
    setShowSaveQueryPopUp(false);
    setLoader(true);

    let timer = setTimeout(() => {
      setLoader(false);
      outputDataHandler();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  const saveQueryHandler = () => {
    sqlResultHandler();

    setSavedQueries((prevQueries) => {
      const newQueries = { ...prevQueries };
      const newQueryName = queryName
        ? queryName
        : `query${Object.keys(newQueries).length + 1}`;
      newQueries[newQueryName] = queries;
      return newQueries;
    });
  };

  const cancelQueryHandler = () => {
    sqlResultHandler();
  };

  const queryNameHandler = (e) => {
    const queryName = e.target.value;
    setQueryName(queryName);
  };

  const handleSavedQueryOnChange = (e) => {
    const queryName = e.target.value;
    if (queryName) {
      setQueries(savedQueries[queryName]);
      sqlResultHandler();
    }
  };

  const onTableListClick = (tableName) => {
    setQueries(`Select * from ${tableName};`);
    sqlResultHandler();
  };

  const memoizedOutputData = useMemo(() => outputData, [outputData]);

  return (
    <>
      <Welcome />
      <div className="App p-[10px] flex justify-between">
        <div className="p-[20px] border-[1px] rounded-md border-solid flex-1 border-black h-[calc(100vh-45px)]">
          <AvailableTables
            tables={[customerData, ordersData, categoriesData, productsData]}
            onTableListClick={onTableListClick}
            savedQueries={savedQueries}
          />
        </div>
        <div className="p-[20px] w-[70%] h-[calc(100vh-45px)]">
          <Input
            queries={queries}
            onQueryChange={onQueryChange}
            runSQLQueryHandler={runSQLQueryHandler}
            savedQueries={savedQueries}
            handleSavedQueryOnChange={handleSavedQueryOnChange}
          />
          <Output outputData={memoizedOutputData} loader={loader} />
        </div>
      </div>
      {showSaveQueryPopUp && (
        <SaveQueryPopup
          saveQueryHandler={saveQueryHandler}
          cancelQueryHandler={cancelQueryHandler}
          queryNameHandler={queryNameHandler}
          queryName={queryName}
        />
      )}
    </>
  );
};

export default App;
