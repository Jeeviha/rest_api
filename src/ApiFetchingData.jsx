import React, { useState, useEffect } from 'react'

const ApiFetchingData = () => {
  const [data, set_data]=useState(null)
  const [loading, set_loading]=useState(false)
  const [error, set_error]=useState(null)

  let cont=[]

  const fetch_Data=()=>
    {
      set_error(null)
      set_loading(true)
      set_data(null)

      fetch("https://dogapi.dog/api/v2/breeds")
      .then(response=>
        {
          if(!response.ok)
            {
              throw new Error("Response has not been fetched successfully")
            }
          else
          {
            return response.json()
          }
        }
      )
      .then(data=>
        {
          // set_data(JSON.stringify(data))
          set_data(data)
          set_loading(false)
          // data_str=JSON.stringify(data)
        }
      )
      .catch(error=>
        {
          set_error(error)
          set_loading(false)
        }
      )

    }
    useEffect(()=>
      {
    fetch_Data();
      },[]
    )
  return (
    <div >
      <h2>Fetching Data from an API</h2>
      <div style={{textAlign:'left'}}>
        {
          loading && <p>Loading...</p>
        }
        {
          error && <p>Error: {error}</p>
        }
        {
          data && <p>{cont=data.data.map(i=>
            <ul><li>{JSON.stringify(i)}</li></ul>
          )}</p>
        }
        {cont}
      </div>
    </div>
  )
}

export default ApiFetchingData
