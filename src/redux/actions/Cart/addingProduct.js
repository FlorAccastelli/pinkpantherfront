import { ADDING_PRODUCT } from "../actions-types";

const addingProduct = (product) => {
    return {
      type: ADDING_PRODUCT,
      payload: product,
    };
  };

  export default addingProduct;

