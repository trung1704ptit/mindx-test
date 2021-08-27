
import React, { useEffect } from 'react';
import { Table, Tag, Space, PageHeader } from 'antd';
import get from 'lodash/get';
import { useSelector, useDispatch } from 'react-redux';
import { actionCallWorldPopulation, actionCallGetAllCountry, actionGetCountryPopulation } from '../system/systemAction';
import { dispatchGetWorldPopulation, dispatchGetAllCountry, dispatchGetTopCountryPopulation } from '../system/systemAction';

const columns = [
  {
    title: 'country_name',
    dataIndex: 'country_name',
    key: 'country_name',
  },
  {
    title: 'population',
    dataIndex: 'population',
    key: 'population',
  },
  {
    title: 'ranking',
    dataIndex: 'ranking',
    key: 'ranking',
  },
  {
    title: 'world_share',
    key: 'world_share',
    dataIndex: 'world_share',
  },
]


export default function TopCountryPopulation() {
    const all_country = useSelector(state => state.system.all_country)
    const top_countries_population = useSelector(state => state.system.top_countries_population)

    const dispatch = useDispatch()

    useEffect(() => {
        if (all_country) {
            const top_population = all_country.slice(0, 20);
            console.log(top_population)

            const promies = top_population.map(async country => {
                return actionGetCountryPopulation(country);
            })

            Promise.all(promies).then((values) => {
                dispatch(dispatchGetTopCountryPopulation(values))
            });
        }
    }, [all_country, dispatch])
    
    if (top_countries_population.length === 0) {
        return <div>LOADING TOP 20 LARGEST COUNTRIES BY POPULATION...</div>
    }
  return (
    <div>
        <h2>TOP 20 LARGEST COUNTRIES BY POPULATION</h2>
      <Table columns={columns} dataSource={top_countries_population} />
    </div>
  )
}
