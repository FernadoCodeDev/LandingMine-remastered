import React from "react";
import Paginator from "./Paginator";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const PaginationSection = () => {
  return (
    <div className="flex ">

      <Paginator pages={[Page1, Page2, Page3, Page4]} />

    </div>
  );
};

export default PaginationSection;