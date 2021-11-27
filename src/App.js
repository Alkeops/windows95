import BarraTareas from "./components/BarraTareas";
import IconsContainer from "./components/IconsContainer";
import Window from "./components/Window";
import { useApiContext } from "./context/Api/Api.context";


function App() {
  const { desktop } = useApiContext();

  return (
    <div className="App">
      <BarraTareas />
      <IconsContainer
        array={desktop}
      />
      <Window />
    </div>
  );
}

export default App;
