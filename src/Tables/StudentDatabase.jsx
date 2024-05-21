import React from 'react'

const StudentDatabase = () => {
  
  const Student=[
      {"RegNo":101, "Name":"Sam", "Age":16, "Eng":70, "Tam":88, "Math":99, "CSC":70, "SCi":50},
      {"RegNo":102, "Name":"Ram", "Age":18, "Eng":56, "Tam":58, "Math":89, "CSC":67, "SCi":58},
      {"RegNo":103,"Name":"Lia", "Age":17, "Eng":80, "Tam":87, "Math":67, "CSC":45, "SCi":70},
      {"RegNo":104,"Name":"Jee", "Age":16, "Eng":75, "Tam":68, "Math":79, "CSC":70, "SCi":50},
      {"RegNo":105,"Name":"Sindhu", "Age":17, "Eng":50, "Tam":49, "Math":100, "CSC":40, "SCi":88},
      {"RegNo":106,"Name":"Sandy", "Age":18, "Eng":60, "Tam":78, "Math":50, "CSC":70, "SCi":50},
      {"RegNo":107,"Name":"Ria", "Age":15, "Eng":88, "Tam":57, "Math":90, "CSC":55, "SCi":58},
      {"RegNo":108,"Name":"Drax", "Age":16, "Eng":23, "Tam":67, "Math":80, "CSC":70, "SCi":66},
      {"RegNo":109,"Name":"Jegan", "Age":16, "Eng":89, "Tam":88, "Math":66, "CSC":88, "SCi":50},
      {"RegNo":110,"Name":"Iniya", "Age":17, "Eng":87, "Tam":88, "Math":100, "CSC":70, "SCi":44}
    ]
  const rowsum=(i) =>
    {
      return (i.Eng+i.Tam+i.Math+i.CSC+i.SCi)
    }
  const colsum=(subject) =>
    {
      return Student.reduce((total, student) => total + student[subject], 0);
    }
  let grand_total=Student.reduce((sum,value)=>sum+=(value.Eng+value.Tam+value.Math+value.CSC+value.SCi),0)
  return (
    <div>
      <center>
        <h2>Student Report Card</h2>
        <table border="1">
        <thead>
          <tr>
          <th rowspan="2">RegNo</th>
          <th rowspan="2">Name</th>
          <th rowspan="2">Age</th>
          <th colspan="5">Marks</th>
          <th rowspan="2">Total</th>
        </tr>
        <tr>
          <th>English</th>
          <th>Tamil</th>
          <th>Maths</th>
          <th>Computer Science</th>
          <th>Science</th>
        </tr></thead>
        <tbody>
          {Student.map((i,index) => 
          (<tr key={index}>
            <td>{i.RegNo}</td>
            <td>{i.Name}</td>
            <td>{i.Age}</td>
            <td>{i.Eng}</td>
            <td>{i.Tam}</td>
            <td>{i.Math}</td>
            <td>{i.CSC}</td>
            <td>{i.SCi}</td>
            <td>{rowsum(i)}</td>
            </tr>
            ))}
            <tr>
              <th colspan="3">Subject Total</th>
              <td>{colsum("Eng")}</td>
              <td>{colsum("Tam")}</td>
              <td>{colsum("Math")}</td>
              <td>{colsum("CSC")}</td>
              <td>{colsum("SCi")}</td>
              <td>{grand_total}</td>
            </tr>
        </tbody>
      </table>
      </center>
    </div>
  );
}
export default StudentDatabase
