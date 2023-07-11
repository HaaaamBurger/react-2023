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
      <Users users={users}/>
    </div>
  );
}

export default App;
