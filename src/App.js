import {CarForm, Cars} from "./components";
import {useSelector} from "react-redux";
import {Loading} from "./components/isLoading/Loading";

function App() {
    const {isLoading} = useSelector(state => state.cars);

  return (
    <div>
      <CarForm/>
      <hr/>
      {isLoading && <Loading/>}
      <Cars/>
    </div>
  );
}

export default App;
