import axios from 'axios'
//import sweetalert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';
function Login() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        console.log(regexEmail.test(email));

        if(email === '' || password ===''){
            console.log('Los campos no pueden estar vacios');
            return;
        }
        if(!regexEmail.test(email)){
            console.log('Debes escribir una direccion de email valida');
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            console.log('credenciales invalidas');
            return;
        }

        axios.post('http://challenge-react.alkemy.org', {email,password})
        .then(res =>{
            //sweetalert('Ingresaste, Bienvenido');
            //console.log(res.data);
            
            const tokenRecibido = res.data.token; 
            localStorage.setItem('token',tokenRecibido);//seteamos la variable token con el contenido de tokenRecibido
            //localStorage es un almacenamiento local en el navegador y solo guarda string
            //localStorage.getItem('token') devuelve el token que guardamos en el localStorage
            navigate('/listado')   
        })
        
    }
    return (
        <>
        <h2>Formulario de login</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo electronico</span><br />
                <input type="text" name="email"></input>
                
            </label>
            <br />
            <label>
                <span>Contraseña</span><br />
                <input type="password" name="password"></input>
            </label>
            <br />
            <button type="submit">Ingresar</button>
        </form>

        </>
    )
}

export default Login;