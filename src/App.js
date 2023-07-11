import {Child1} from "./components/child1/Child1";
import {Child2} from "./components/child2/Child2";
import {createContext, useState} from "react";

function App() {
  //Передача контекстом
  const InfoContext = createContext(null);
  const mainInfo = 'React'


  //Передача стейтом
  const [info, setInfo] = useState(null);


  console.log(info)
  return (
    <div>
      <InfoContext.Provider value={mainInfo}>
        <Child1 info={info}/>
        <Child2 setInfo={setInfo}/>
      </InfoContext.Provider>
    </div>
  );
}

export {App,createContext};
