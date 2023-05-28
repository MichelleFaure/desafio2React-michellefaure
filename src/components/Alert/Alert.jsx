import Alert from 'react-bootstrap/Alert';

function Alerta({text, variant}){
    return <Alert variant={variant}>{text}</Alert>
}

export default Alerta;