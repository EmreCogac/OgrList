import React, { Component } from 'react';
import defaultData from '../data/ogr';
import { Button, Input, Select, Table } from 'antd';
import Column from 'antd/es/table/Column';
import UniList from '../data/uni';

interface DataType {
  key: React.Key;
  firstName?: string;
  lastName?: string;
  age?: number;
  uni?: string;
}
// state -> 0 , 1 durum değişir
// state = durum
// 
interface StateType {
  data: DataType[];
  InputAd?: string;
  InputSoyad?: string;
  InputYas?: number;
  InputUni?: string;
}

export default class AddOgr extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    const savedData = localStorage.getItem('students');
    this.state = {
      data: savedData ? JSON.parse(savedData) : defaultData,
      InputAd: '',
      InputSoyad: '',
      InputYas: undefined,
      InputUni: ''
    };
  }

  handleInputChange = (key: keyof StateType, value: any) => {
    this.setState({ [key]: value } as Pick<StateType, keyof StateType>);
  }

  addStudent = () => {
    if (this.state.InputAd && this.state.InputSoyad && this.state.InputYas && this.state.InputUni) {
      const newStudent: DataType = {
        key: (this.state.data.length + 1).toString(),
        firstName: this.state.InputAd,
        lastName: this.state.InputSoyad,
        age: this.state.InputYas,
        uni: this.state.InputUni
      };
      const newData = [...this.state.data, newStudent];
      this.setState({ data: newData }, () => {
        localStorage.setItem('students', JSON.stringify(newData));
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Öğrenci Listesi</h1>
        <Input style={{ width: 120, margin: 20 }} value={this.state.InputAd} onChange={e => this.handleInputChange('InputAd', e.target.value)} placeholder="Ad" />
        <Input style={{ width: 120, margin: 20 }} value={this.state.InputSoyad} onChange={e => this.handleInputChange('InputSoyad', e.target.value)} placeholder="Soyad" />
        <Input type="number" style={{ width: 120, margin: 20 }} value={this.state.InputYas} onChange={e => this.handleInputChange('InputYas', Number(e.target.value))} placeholder="Yaş" />
        <Select style={{ width: 120, margin: 20 }} value={this.state.InputUni} onChange={value => this.handleInputChange('InputUni', value)} options={UniList.map(it => ({ value: it.uniName, label: it.uniName }))} />
        <Button type="primary" onClick={this.addStudent}>Öğrenci Ekle</Button>
        <Table dataSource={this.state.data} rowKey="key">
          <Column title="Adı" dataIndex="firstName" key="firstName" />
          <Column title="Soyadı" dataIndex="lastName" key="lastName" />
          <Column title="Yaşı" dataIndex="age" key="age" />
          <Column title="Üniversite" dataIndex="uni" key="uni" />
        </Table>
        {/* {UniList.map(v => (
          <div>
            <p>{v.uniName} {v.date}</p>
          </div>
        ))} */}
      </div>
    );
  }
}
