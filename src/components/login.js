function Login() {

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
        if(email !== 'mary@test.com' || password !== '1234') {
            console.log('credenciales invalidas');
        }
      
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