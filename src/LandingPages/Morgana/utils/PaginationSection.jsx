import React from "react";
import Paginator from "./Paginator";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";

const PaginationSection = () => {
  return (
    <div className="flex ">

      <Paginator pages={[Page1, Page2, Page3, Page4]} />

    </div>
  );
};

export default PaginationSection;