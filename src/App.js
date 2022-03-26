import { Table } from "antd";
import React,{ useEffect, useState } from "react";
import 'antd/dist/antd.css';
import axios from 'axios';

function App ()  {

const [loading,setLoading] = useState(false);
const [dataSource,setDataSource] = useState([]);

useEffect( () => {
    setLoading (true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .then( data => {
        setDataSource(data)
    }).catch(err => {
        console.log(err)
    }).finally ( () => {
        setLoading (false)
    }
    )
},[])

const columns = [
  {
    title: 'UserID',
    dataIndex: 'userId',
    key: '1',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Body',
    key: 'body',
    dataIndex: 'body',
  }
 ]
 return (
    <>
      <Table 
      loading = {loading}
      columns={columns}
      dataSource = {dataSource}
      pagination = {true}
      />
    </>

 )
}
 export default App;