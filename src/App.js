import './App.css';
import Alert from './components/Alert/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
  const [isValid, setIsValid] = useState();
  const handlerSubmitResult = (e) => {
    setIsValid(e)
  };

  return (
    <div className="App">
      <div className='container'>
        <Login onSubmitForm={(e)=> handlerSubmitResult(e) } />
        <Alert 
        text={isValid ? "contraseña correcta" : "contraseña incorrecta"} 
        variant={isValid ? "success" : "danger"}/>
      </div>
    </div>
  );
}

export default App;
