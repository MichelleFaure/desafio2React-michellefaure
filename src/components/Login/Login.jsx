import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"


function Login({onSubmitForm}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisable] = useState(true);

    
    const submit = (e) => {
        e.preventDefault();
        if(email === "michelle@gmail.com" && password === "hola"){
            return onSubmitForm(true);
        }
        return onSubmitForm(false);
        
    };

    const habilitacionBtn = (e) => {
        setPassword(e.target.value);

        if(email !== "" && password !== ""){
            setIsDisable(false);
        }
    }

  return (
        <form onSubmit={submit}>
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder='Ingresa tu correo' type="text" id="email" onChange={(e)=> setEmail(e.target.value)} />

            <Form.Label>Password</Form.Label>
            <Form.Control placeholder='Ingresa tu contraseña' type="password" id="password" onChange={(e)=> habilitacionBtn(e)} />
            
            <Button type="submit" disabled ={isDisabled}>Iniciar sesión</Button>
    </form>
  );
}

export default Login