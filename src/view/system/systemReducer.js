import * as constants from './constants';

const initialState = {
  locale: 'en',
  world_population: {},
  all_country: [],
  all_countries_population: [],
  top_countries_population: []
};

const system = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_WOLRD_POPULATION:
        return {
            ...state,
            world_population: action.data
        }
    case constants.GET_ALL_COUNTRY:
        return {
            ...state,
            all_country: action.data
        }
    case constants.GET_COUNTRY_POPULATION:
      return {
          ...state,
          all_countries_population: action.data
      }

    case constants.GET_TOP_COUNTRY_POPULATION:
        return {
            ...state,
            top_countries_population: action.data
        }
    default:
      return state;
  }
};

export default system;
