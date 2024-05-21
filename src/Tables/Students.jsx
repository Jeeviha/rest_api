import React from 'react';

const Students = () => {
  let stu_db = [
    {name:"Ashlyn", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}, {name:"Blair", sub1:80, sub2: 85, sub3: 92, sub4:93, sub5:98}, {name:"Amy", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}, {name:"Amy", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}, {name:"Amy", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}, {name:"Amy", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}, {name:"Amy", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}, {name:"Amy", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}, {name:"Amy", sub1:90, sub2: 95, sub3: 92, sub4:93, sub5:98}

  ];

  let totalmarks = (i) => {
    return i.sub1 + i.sub2 + i.sub3 + i.sub4 + i.sub5;
  };
 

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Subject 4</th>
            <th>Subject 5</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {stu_db.map((i, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.sub1}</td>
              <td>{i.sub2}</td>
              <td>{i.sub3}</td>
              <td>{i.sub4}</td>
              <td>{i.sub5}</td>
              <td>{totalmarks(i)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students