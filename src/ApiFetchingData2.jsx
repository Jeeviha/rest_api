
import React, { useState, useEffect } from 'react'

const ApiFetchingData2 = () => {

  const [data, set_data]=useState(null)
  const [loading, set_loading]=useState(false)
  const [error, set_error]=useState(null)

  const data_parsed={}
  const data_arr=[]

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
    <div>
      <h2>Fetching Data from an API</h2>
      <div>
        {
          loading && <p>Loading...</p>
        }
        {
          error && <p>Error: {error}</p>
        }
        {
          data && <ul>
              {data_parsed=JSON.parse(data)}
              {data_arr=Object.values(data_parsed)}
              {data_arr.map((i)=>
            (
                <li>{JSON.stringify(i)}</li> 
          ) 
          )
          }
          </ul>
        }
      </div>
    </div>
  )
}

export default ApiFetchingData2
