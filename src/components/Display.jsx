// Display.js
import React from 'react';

const Display = ({ data, deleteData, editData }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => editData(index)}>Edit</button>
          <button onClick={() => deleteData(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Display;
