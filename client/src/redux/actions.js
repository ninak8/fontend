import axios from "axios";
// const ERROR = "ERROR";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const NEW_PRODUCT = "NEW_PRODUCT";
export const DELETE = "DELETE";
export const MUTATE_PRODUCT = "MUTATE_PRODUCT";
export const FILTER_CATEGORIES = "FILTER_CATEGORIES";
export const FEATURED = "FEATURED";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";

export const getP = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/products`)
      .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

// type: FEATURED,
export const getFeatured = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/filters`)
      .then((res) => dispatch({ type: FEATURED, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

// para la searchavar
export const getProductByName = (name) => {
  return async (dispatch) => {
    try {
      const allProducts = await axios.get(
        `http://localhost:3001/products?q=${name}`
      );
      const result = allProducts.data;

      dispatch({ type: GET_PRODUCT_BY_NAME, payload: result });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const GET_BY_CATEGORY = "GET_BY_CATEGORY";

export const getByCategory = (category) => {
  return async (dispatch) => {
    try {
      const byCategory = await axios.get(
        `http://localhost:3001/filters/${category}`
      );
      const result = byCategory.data;
      dispatch({ type: GET_BY_CATEGORY, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getByCategoryAndName = (category, name) => {
  return async (dispatch) => {
    try {
      const byCategoryAndName = await axios.get(
        `http://localhost:3001/filters/${category}?q=${name}`
      );
      const result = byCategoryAndName.data;
      dispatch({ type: GET_BY_CATEGORY, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getProductByID = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.get(`http://localhost:3001/products/${id}`);
      const result = product.data;

      dispatch({ type: GET_PRODUCT_BY_ID, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE, payload: id });
      await axios.delete(`localhost:3001/products/${id}`);
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const mutateProduct = (data) => {
  return async (dispatch) => {
    try {
      await axios.patch("localhost:3001/products", data);
      dispatch({ type: MUTATE_PRODUCT, payload: data });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const FILTERS = "FILTERS";

export const filter = (payload) => ({
  type: FILTERS,
  payload,
});

export const order = (payload) => ({
  type: ORDER_BY_PRICE,
  payload,
});

export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

// !------------------------------------------------------------------

export const GET_TAGS = "GET_TAGS";
export const CREATE_TAG = "CREATE_TAG";
export const DELETE_TAG = "DELETE_TAG";

export const getTags = () => {
  return async (dispatch) => {
    try {
      const tags = await axios.get("localhost:3001/tags");
      const result = tags.data;

      dispatch({ type: GET_TAGS, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};

// cambiar en el back por un "findOrCreate"

// export const createTag = async (data) =>{
//   const newTag = await axios.post("localhost:3001/tags", data)
//   return newTag
// }

export const deleteTag = (id) => {
  return async (dispatch) => {
    try {
      const hasTagDelete = await axios.delete(`localhost:3001/tags/${id}`);
      dispatch({ type: DELETE_TAG, payload: hasTagDelete });
    } catch (error) {
      console.error(error);
    }
  };
};

// !------------------------------------------------------------------ç

export const GET_ALL_COLORS = "GET_ALL_COLORS";

export const DELETE_COLOR = "DELETE_COLOR";
export const CREATE_COLOR = "CREATE_COLOR";

export const getAllColors = () => {
  return async (dispatch) => {
    try {
      const hasColors = await axios.get("localhost:3001/colors");
      const result = hasColors.data;
      dispatch({ type: GET_ALL_COLORS, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};

// !------------------------------------------------------------------

export const GET_ALL_SIZE = "GET_ALL_SIZE";

export const DELETE_SIZE = "DELETE_SIZE";
export const CREATE_SIZE = "CREATE_SIZE";

export const getAllSizes = () => {
  return async (dispatch) => {
    try {
      const hasSizes = await axios.get("localhost:3001/sizes");
      const result = hasSizes.data;
      dispatch({ type: GET_ALL_SIZE, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};
