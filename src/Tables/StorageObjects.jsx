import React from 'react'

const StorageObjects = () => {
    localStorage.clear()
    localStorage.setItem("Circle",0)
    localStorage.setItem("Square",4)
    localStorage.setItem("Triangle",3)
    localStorage.setItem("Hexagon",6)
    localStorage.setItem("Heptagon",7)

    let keys=Object.keys(localStorage)
    let Animal=[]

    sessionStorage.setItem("Dog","Puppy")
    sessionStorage.setItem("Cat","Kitten")
    sessionStorage.setItem("Cow","Calf")
    sessionStorage.setItem("Deer","Fawn")
    sessionStorage.setItem("Lion","Cub")

    for(let i=0;i< localStorage.length;i++)
      {
        let key=sessionStorage.key(i)
        let val=sessionStorage.getItem(key)
        Animal.push([key,val])
      }

  return (
    <div style={{textAlign:'left', marginLeft:'40px'}}>
        <h3>Local Storage:</h3> 
        {keys.map(i=>
        (
            <p>Key: {i}, Value: {localStorage.getItem(i)}</p>
        ))}
        <br></br><h3>Session Storage:</h3>
        {Animal.map(i=>
        (
            <p>Key: {i[0]}, Value: {i[1]}</p>
        ))}
    </div>
  )
}

export default StorageObjects
