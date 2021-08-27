
import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, PageHeader } from 'antd';
import get from 'lodash/get';
import { useSelector, useDispatch } from 'react-redux';
import { actionCallWorldPopulation, actionCallGetAllCountry, actionGetCountryPopulation } from '../system/systemAction';
import { dispatchGetWorldPopulation, dispatchGetAllCountry, dispatchGetCountryPopulation } from '../system/systemAction';
import { Pagination } from 'antd';


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
    const all_countries_population = useSelector(state => state.system.all_countries_population)
    const [page, setPage] = useState(0);

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(all_country)
        if (all_country) {
            const top_population = all_country.slice(page * 10, 10);
            const promies = top_population.map(async country => {
                return actionGetCountryPopulation(country);
            })

            Promise.all(promies).then((values) => {
                dispatch(dispatchGetCountryPopulation(values))
            });
        }
    }, [all_country, dispatch, page])
    
    if (all_country.length === 0 ||  all_countries_population.length === 0) {
        return <div>LOADING ALL COUNTRIES BY POPULATION...</div>
    }
    


    const onChangePage = page => {
        setPage(page)
    }
 
  return (
    <div>
        <h2>ALL COUNTRIES WITH POPULATION</h2>
        <Table columns={columns} dataSource={all_countries_population} page/>
        <Pagination defaultCurrent={10} current={page} onChange={onChangePage}  total={all_country.length} />
    </div>
  )
}
