import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  NEW_PRODUCT,
  GET_PRODUCT_BY_ID,
  FEATURED,
  FILTERS,
  ORDER_BY_PRICE,
  GET_BY_CATEGORY,
  CLEAN_DETAIL,
  //** tags **
  GET_TAGS,
} from "./actions";

const initialState = {
  products: [],
  detail: {},
  tags: [],
  featured: [],
  search: [],
  // brands: [],
  // colors: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        search: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case GET_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    case FILTERS:
      return {
        ...state,
        products: action.payload,
      };

    case FEATURED:
      return {
        ...state,
        featured: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        detail: null,
      };

    case ORDER_BY_PRICE:
      let sort =
        action.payload === "A-z"
          ? state.products.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.products.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        products: sort,
      };

    // ****** TAGS ****** //
    case GET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
