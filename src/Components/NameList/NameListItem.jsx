import moment from "moment";

function NameListItem(props) {
return(      
<li>  
        <p><img src={props.avatar}/> {props.name}</p>
        <p>City:{props.city} </p><p>Email:{props.email}</p>
        <p>Birthdate: {moment(props.birthdate).format("MM/DD/YYYY")}</p>
</li>      
);
}
export default NameListItem;