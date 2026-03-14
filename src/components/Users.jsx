import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

export default function Users(){

const [users,setUsers] = useState([]);

useEffect(()=>{
async function fetchUsers(){
const data = await getUsers();
setUsers(data);
}
fetchUsers();
},[]);

return(
<div>
{users.map(user=>(
<div key={user.id} style={{marginBottom:"15px",border:"1px solid #ddd",padding:"10px"}}>
<h3>{user.name}</h3>
<p>{user.email}</p>
</div>
))}
</div>
);
}