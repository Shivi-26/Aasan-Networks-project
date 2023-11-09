import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const changeData = () => {
    axios.post('http://localhost:3000/api/data', { newData: 'New data' })
      .then(response => {
        console.log(response.data); // This logs the response in the console
        setData(response.data); // Update the state with the response data
      })
      .catch(error => {
        console.error('Error changing data: ', error);
      });
  };

  return (
    <div>
      <p>Data from the Linux system: {data}</p>
      <button onClick={changeData}>Change Data</button>
    </div>
  );
}

export default App;
