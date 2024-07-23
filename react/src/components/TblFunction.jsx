import React, { useEffect, useRef } from "react";
import DataTables from "datatables.net-dt";
import '../style/table.css'
import '../../node_modules/datatables.net-dt/css/dataTables.dataTables.css'
const TblFunction = (props) => {
  const tableRef = useRef();
  useEffect(() => {
    const table = new DataTables(tableRef.current, { // create table
      columns: [ //titles
        {data: "name", title: "Name" },
        {data: "oscar", title: "Oscar" },
        {data: "genre", title: "Genre" },
        {data: "released_year", title: "Release" },
        {data: "duration", title: "Duration" },
        {data: "stars", title: "Stars" },
        {data: "directors", title: "Directors" },


      ],
      data: props.data, // data
    });
    return () => { // clean up function
      if(tableRef.current){
        table.destroy();
      }
    }
  }, [props.data]); // if data changed to render the dom

  return (
    <div className="table-wrap">
      <table className="table cell-border compact stripe row-border" width={780} ref={tableRef}></table>
    </div>
  );
};

export default TblFunction;
