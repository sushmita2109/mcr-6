export const initialState = {
  allresturants: [],
  allcusine: [],
  filteredResturants: [],
};
export const resturantReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return {
        ...state,
        allresturants: action.payload,
      };
    }
    case "GET_CUSINE": {
      return {
        ...state,
        allcusine: action.payload,
      };
    }
    case "GET_RESTURANT": {
      return {
        ...state,
        filteredResturants: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
