import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';

const TableComponent = ( prop ) => {

    
  const data = prop.dataList;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'state',
      key: 'state',
      sorter: (a, b) => a.state.length - b.state.length
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      sorter: (a, b) => a.active - b.active
    },
    {
      title: 'Confirmed',
      dataIndex: 'confirmed',
      key: 'confirmed',
      sorter: (a, b) => a.confirmed - b.confirmed
    },
    {
        title: 'Deaths',
        dataIndex: 'deaths',
        key: 'deaths',
        sorter: (a, b) => a.deaths - b.deaths
    },
    {
        title: 'Recoverd',
        dataIndex: 'recovered',
        key: 'recovered',
        sorter: (a, b) => a.recovered - b.recovered
      },
  ];
  
  return(<Table dataSource={data} columns={columns} key='table'/>)
}

export default TableComponent;