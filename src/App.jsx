// App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';


const App = () => {


  const [data, setData] = useState([]);

  const addData = (item) => {
    setData([...data, item]);
  };

  const deleteData = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const editData = (index) => {
    const newData = prompt('Edit data:', data[index]);
    if (newData !== null) {
      const updatedData = [...data];
      updatedData[index] = newData;
      setData(updatedData);
    }
  };

  return (
    <div>
      <h1>Bookmark App</h1>
      <Form  addData={addData} />
      <Display data={data} deleteData={deleteData} editData={editData} />
    </div>
  );
};

export default App;
