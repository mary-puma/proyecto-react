function Login() {

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email)

    }
    return (
        <>
        <h2>Formulario de login</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo electronico</span><br />
                <input type="email" name="email"></input>
                
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