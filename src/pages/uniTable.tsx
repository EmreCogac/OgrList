import { Table } from 'antd'
import React, { Component } from 'react'
import UniList from '../data/uni';
const { Column } = Table;

interface DataType {
  key: React.Key;
  uniName: string;
  date: string;
}
interface UniTableState {
    data: DataType[];
}


class uniTable extends React.Component<{},UniTableState> {
  render() {
    return (
   <div>
       <h1>Baslik</h1>
      <Table dataSource={UniList}>
      <Column title="Uni name" dataIndex="uniName" key="uniName" />
      </Table>
   </div>
    )
  }
}
export default uniTable
