import React, { Component } from 'react'
import { Space, Table } from "antd";
import data from '../data/ogr';
import defaultData from '../data/ogr';
const { Column } = Table;

interface OgrTableProps {

}
interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  uni: string;
}
interface OgrTableState {
    data: DataType[];
  
}


class OgrTable extends React.Component<OgrTableProps,OgrTableState> {
  constructor(props: {}) {
    super(props);
    const savedData = localStorage.getItem('students');
    if (savedData) {
      this.state = {
        data: JSON.parse(savedData)
      };
    } else {
      this.state = {
        data: defaultData
      };
      localStorage.setItem('students', JSON.stringify(defaultData));  // Varsayılan verileri localStorage'a kaydet
    }
  }

  render() {
    return (
      <Table dataSource={this.state.data}>
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Uni" dataIndex="uni" key="uni" />
    </Table>
    )
  }
}


export default OgrTable