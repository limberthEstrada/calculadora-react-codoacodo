import logo from './logo.svg';
import './assets/css/styles.css'
import Cuerpo from './components/Cuerpo';
import InputContext from "./context/InputContext";
import useInput from './hooks/useInput';


function App() {
  const input = useInput()
  return (
    <InputContext.Provider value={input}>
      <Cuerpo/>
    </InputContext.Provider>
    );
}

export default App;
