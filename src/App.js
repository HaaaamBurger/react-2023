import {useEffect, useState} from "react";

import {fetchServices} from "./services/fetch.services";
import {Users} from "./components/users/Users";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchServices.getUsers().then(response => response.json()).then(data => setUsers(data));
  }, [])


  console.log(users);
  return (
    <div>
      {users.map(value => <Users key={value.id} user={value}/>)}
    </div>
  );
}

export default App;
