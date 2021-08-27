import api from '../../utils/service/api';
import get from 'lodash/get';
import * as constants from './constants'

export const dispatchGetWorldPopulation = data => {
  return dispatch => {
    dispatch({
      type: constants.GET_WOLRD_POPULATION,
      data
    })
  }
}

export const dispatchGetAllCountry = data => {
  return dispatch => {
    dispatch({
      type: constants.GET_ALL_COUNTRY,
      data
    })
  }
}

export const dispatchGetCountryPopulation = data => {
  return dispatch => {
    dispatch({
      type: constants.GET_COUNTRY_POPULATION,
      data
    })
  }
}

export const dispatchGetTopCountryPopulation = data => {
  return dispatch => {
    dispatch({
      type: constants.GET_TOP_COUNTRY_POPULATION,
      data
    })
  }
}



async function actionCallWorldPopulation() {
    const res = await api({method: 'GET', url: 'https://world-population.p.rapidapi.com/worldpopulation'})

    const data = get(res, 'data.body', {})

    return data;
}


async function actionCallGetAllCountry() {
  const res = await api({method: 'GET', url: 'https://world-population.p.rapidapi.com/allcountriesname'})

  const data = get(res, 'data.body', {})

  return data;
}

async function actionGetCountryPopulation(country) {
  const res = await api({method: 'GET', url: 'https://world-population.p.rapidapi.com/population',  params: {
    country_name: country
  }})

  const data = get(res, 'data.body', {})

  return data;
}


export {
    actionCallWorldPopulation,
    actionCallGetAllCountry,
    actionGetCountryPopulation
}