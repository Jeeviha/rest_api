import React from 'react'

const API1 = () => {
  function getData() {
    fetch('https://dogapi.dog/api/v2/breeds')
      .then(response => response.json()) // Parse the JSON from the response
      .then(data => console.log(data))    // Use the data from the response
      .catch(error => console.error('Error:', error)); // Handle any errors
  }
  console.log(response)
  getData();
  return (
    <div>
      
    </div>
  )
}

export default API1
