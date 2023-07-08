export const initialState = {
  allresturants: [],
  allcusine: [],
  filteredResturants: [],
  resturantDetail: [],
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
    case "GET_RESTURANT_DETAIL": {
      return {
        ...state,
        resturantDetail: action.payload,
      };
    }
    case "SAVE_REVIEW": {
      let newRating = action.payload;
      let resturant = state.resturantDetail;
      resturant.ratings = { ...resturant.ratings, newRating };

      return {
        ...state,
        resturantDetail: resturant,
      };
    }
    default: {
      return state;
    }
  }
};
