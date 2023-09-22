import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_BY_CATEGORY = "GET_BY_CATEGORY";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const NEW_PRODUCT = "NEW_PRODUCT";
export const DELETE = "DELETE";
export const MUTATE_PRODUCT = "MUTATE_PRODUCT";
export const FILTER_CATEGORIES = "FILTER_CATEGORIES";
export const FEATURED = "FEATURED";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_PRODUCT_QUERY = "GET_PRODUCT_QUERY";
// <----->
export const GET_ALL_COLORS = "GET_ALL_COLORS";
export const GET_TAGS = "GET_TAGS";
// <----->
export const GET_IMAGES = "GET_IMAGES";
export const GET_FAQS = "GET_FAQS";

export const getP = () => {
  return (dispatch) => {
    return axios
      .get(`products`)
      .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

// type: FEATURED,
export const getFeatured = () => {
  return (dispatch) => {
    return axios
      .get(`filters`)
      .then((res) => dispatch({ type: FEATURED, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

// para la searchabar
export const getProductByName = (name) => {
  return async (dispatch) => {
    try {
      const allProducts = await axios.get(`products?q=${name}`);
      const result = allProducts.data;

      dispatch({ type: GET_PRODUCT_BY_NAME, payload: result });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const getProductquery = (name) => {
  return async (dispatch) => {
    try {
      const allProducts = await axios.get(`products?q=${name}`);
      const result = allProducts.data;

      dispatch({ type: GET_PRODUCT_QUERY, payload: result });
    } catch (error) {
      // dispatch({ type: ERROR, payload: error.response.data.error });
    }
  };
};

export const getByCategory = (category) => {
  return async (dispatch) => {
    try {
      const byCategory = await axios.get(`filters/${category}`);

      let result = byCategory.data;
      if (result == false) {
        result = [null];
        dispatch({ type: GET_BY_CATEGORY, payload: result });
      }
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
        `filters/${category}?q=${name}`
      );
      const result = byCategoryAndName.data;
      dispatch({ type: GET_BY_CATEGORY, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getProductByID = (id) => {
  return (dispatch) => {
    return axios
      .get(`products/${id}`)
      .then((res) =>
        dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data[0] })
      )
      .catch((error) => console.error(error));
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE, payload: id });
      await axios.delete(`products/${id}`);
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const mutateProduct = (data) => {
  return async (dispatch) => {
    try {
      await axios.patch("products", data);
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

export const getTags = () => {
  return async (dispatch) => {
    try {
      const tags = await axios.get("tags");
      const result = tags.data;

      dispatch({ type: GET_TAGS, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};

// !------------------------------------------------------------------ç

export const getAllColors = () => {
  return async (dispatch) => {
    try {
      const hasColors = (await axios.get("colors")).data;
      // const result = hasColors.data;
      dispatch({ type: GET_ALL_COLORS, payload: hasColors });
    } catch (error) {
      console.error(error);
    }
  };
};

// !------------------------------------------------------------------

export const GET_ALL_SIZE = "GET_ALL_SIZE";

export const getAllSizes = () => {
  return async (dispatch) => {
    try {
      const hasSizes = await axios.get("sizes");
      const result = hasSizes.data;
      dispatch({ type: GET_ALL_SIZE, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getFaqs = () => {
  return (dispatch) => {
    return axios
      .get(`faqs`)
      .then((res) => dispatch({ type: GET_FAQS, payload: res.data }))
      .catch((error) => console.error(error));
  };
};

export const getImages = () => {
  return (dispatch) => {
    return axios
      .get(`images`)
      .then((res) => dispatch({ type: GET_IMAGES, payload: res.data }))
      .catch((error) => console.error(error));
  };
};
