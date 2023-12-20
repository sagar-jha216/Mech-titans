import React, { useEffect } from 'react';

const ApiRequestComponent = () => {
  const api_key = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';
  const url = 'https://api.maldatabase.com/download';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': api_key,
            'Accept-Encoding': 'gzip, deflate'
          }
        });

        // Check if the request was successful (status code 200)
        if (response.ok) {
          const jsonData = await response.json();
          // Do something with the JSON data, if needed
          console.log(jsonData);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }

      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {/* Your React component JSX */}
    </div>
  );
};

export default ApiRequestComponent;
