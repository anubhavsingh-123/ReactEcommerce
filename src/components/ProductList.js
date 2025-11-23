
import React from "react";
  import ListView from "./ListView";
import GridView from "./GridView";

import { useFilterContext } from "../Context/filter_context";

const ProductList = () => {
  const { filter_products,  grid_view } = useFilterContext();

  if (grid_view===true ) {
    return <GridView products={filter_products} />;
  }
  if (grid_view===false ) {
    return <ListView products={filter_products} />;
  }


  
};

export default ProductList;

