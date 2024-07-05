interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    uni: string;
  }
  
const defaultData: DataType[] = [
  {
    key: '1',
    firstName: 'Emre',
    lastName: 'Aktas',
    age: 32,
    uni: 'KAEU',
  },
  {
    key: '2',
    firstName: 'ds',
    lastName: 'sdsd',
    age: 42,
    uni: 'Gazi',
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    uni: 'E',
  },
];
  export default defaultData