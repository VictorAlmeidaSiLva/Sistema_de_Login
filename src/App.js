import './App.css';
import { Route, Routes } from "react-router-dom"
import LogarConta from './components/LogarConta';
import LoginContext from './constext/LoginContext';
import Logado from './components/Logado';

function App() {
  return (
    <div className="App">
      <LoginContext>
        <Routes>
          <Route path='/Ok' element={<Logado />}></Route>
          <Route path='/' element={<LogarConta></LogarConta>}></Route>
        </Routes>
      </LoginContext>
    </div>
  );
}

export default App;
