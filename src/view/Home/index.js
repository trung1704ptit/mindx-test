import React, { useEffect } from 'react';
import { actionCallWorldPopulation, actionCallGetAllCountry, actionGetCountryPopulation } from '../system/systemAction';
import Dashboard from './Dashboard';
import TopBar from './TopBar';
import { dispatchGetWorldPopulation, dispatchGetAllCountry, dispatchGetCountryPopulation } from '../system/systemAction';
import { useDispatch } from 'react-redux';
import get from 'lodash/get';
import TopCountryPopulation from './TopCountryPopulation';


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
      const process = async () => {
        const worldPopulation = await actionCallWorldPopulation();
        dispatch(dispatchGetWorldPopulation(worldPopulation))
        
        const allCountry = await actionCallGetAllCountry();
        const countries = get(allCountry, 'countries', []);

        if (countries) {
            dispatch(dispatchGetAllCountry(countries))
            // const promies = countries.map(async country => {
            //     return actionGetCountryPopulation(country);
            // })

            // Promise.all(promies).then((values) => {
            //     dispatch(dispatchGetCountryPopulation(values))
            // });
        }
      }
      process();
  }, [dispatch])

  return (<div>
    <TopBar />
    <TopCountryPopulation />
    <Dashboard />
  </div>)
}