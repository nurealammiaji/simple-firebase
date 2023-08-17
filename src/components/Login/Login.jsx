

const Login = () => {

    const loginHandler = () => {
        console.log("Login Button Clicked");
    }

    return (
        <div>
            <h3>Login Page</h3>
            <br /><br />
            <div className="text-center">
                <button className="bg-yellow-400 py-2 px-5 rounded-md" onClick={loginHandler}>Login</button>
            </div>
        </div>
    );
};

export default Login;