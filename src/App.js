import React, { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://95.216.202.238:5000/");
      const data = await response.json();
      setApiData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => {}}>Call API</button>
      {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : (
        <p>Press the button to call the API.</p>
      )}
    </div>
  );
}

export default App;
