import {createContext, useState} from "react";

import {Child1} from "./components/child1/Child1";
import {Child2} from "./components/child2/Child2";

export const InfoContext = createContext(null);
const mainInfo = 'React';

function App() {

  const [info, setInfo] = useState(null);

  return (
    <div>
      <InfoContext.Provider value={{setInfo,info}}>
        <Child1 info={info}/>
        <Child2/>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
