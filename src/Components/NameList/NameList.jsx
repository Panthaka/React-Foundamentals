import React from "react";
import NameListItem from "./NameListItem";

function NameList() {
const nameList = [{
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
}];

const nameListComponent =()=>{
    return (nameList.map((aName) => { 
        return (
        <NameListItem 
            name={`${aName.name.first} ${aName.name.last}`}
            city={aName.location.city} 
            email={aName.email}
            birthdate={aName.dob.date}   
            avatar={aName.picture.medium}/> 
         )})) ;
};

    return(
    <reactfragment> 
       <h1>Name List</h1>
       <hr/>
       <ul>
        {nameListComponent()}
       </ul>
    </reactfragment> 
)
}  
export default NameList; 