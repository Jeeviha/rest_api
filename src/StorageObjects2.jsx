import React from 'react'

const StorageObjects2 = () => {
    const emp=[{"emp_id":101},
        {"emp_name":"Jack"},
        {"emp_sal":30000},
        {"emp_dob":"21-08-2005"}
    ]

    localStorage.clear()

    const emp_str=JSON.stringify(emp) //converts JSON obj to str obj
    localStorage.setItem("Emp_Info",emp_str)
    const emp_get=localStorage.getItem("Emp_Info")
    const emp_parsed=JSON.parse(emp_str) //converts str obj to JSON obj 
    console.log(emp_parsed)
    
    sessionStorage.setItem("Emp_Info",emp_str)
    const emp_get1=sessionStorage.getItem("Emp_Info")
    const emp_parsed1=JSON.parse(emp_str)

    const keys = emp_parsed.map(i => Object.keys(i)[0]);  //Object.keys(i) -returns an array of the keys of the object. Hence it returns['emp_id']
    const values = emp_parsed.map(i => Object.values(i)[0]); //Object.keys(i)[0] - accesses the first element of the array returned by Object.keys(i). Hence it returns emp_id
    
    const keys1 = emp_parsed1.map(i => Object.keys(i)[0]);  //Object.keys(i) -returns an array of the keys of the object. Hence it returns['emp_id']
    const values1 = emp_parsed1.map(i => Object.values(i)[0]);
  return (
    <div style={{textAlign:'left', marginLeft:'40px'}}>
        <h3>Local Storage</h3>
      {
        keys.map(i=>
            (
               <p>Keys: {i}</p>
            )
        )
        }<br></br>
        {
        values.map(i=>
            (
                <p>Values: {i}</p>
            )
        )
      }
      <br></br><h3>Session Storage</h3>
      {
        keys1.map(i=>
            (
               <p>Keys: {i}</p>
            )
        )
        }<br></br>
        {
        values1.map(i=>
            (
                <p>Values: {i}</p>
            )
        )
      }
    </div>
  )
}

export default StorageObjects2
