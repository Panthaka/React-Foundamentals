import React, { useState,useEffect } from "react";
import NameListItem from "./NameListItem";

function NameList() {
    const [loadData, setLoadData] = useState(new Date());
    const [nameList, setNameList] = useState([{
  "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
        "location": { 
        "city": "Billings",      
      },
       "email": "jennie.nichols@example.com",
        "dob": {
        "date": "1992-03-08T15:13:16.688Z", 
      }, "picture": { 
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg", 
      },
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      }
}]);
 

useEffect(() => {
  fetch('https://randomuser.me/api/')
    .then((response) => {
        console.log(response);
        return response.json();     
    })
    .then((responseData) => { 
         console.log(responseData.results);
        setNameList(nameList => [...nameList, responseData.results[0]]);
    })
},[loadData]);

const nameListComponent =()=>{
    return (nameList.map((aName) => { 
        return (
        <NameListItem 
            key={aName.id.value}
            name={`${aName.name.first} ${aName.name.last}`}
            city={aName.location.city} 
            email={aName.email}
            birthdate={aName.dob.date}   
            avatar={aName.picture.medium}/> 
         )})) ;
};
const addUserHandler =()=>{
    setLoadData(new Date())
};
    return(
    <React.Fragment> 
     <div className="container mt-4">
        <button className="btn btn-primary" onClick={addUserHandler} >Add Names</button>
       <ul className="list-group-item">  {nameListComponent()}</ul>
       </div>
    </React.Fragment> 
)
}  
export default NameList; 