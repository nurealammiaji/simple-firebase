import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../firebase.init';


const Login = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const loginHandler = () => {

        signInWithPopup(auth, provider)

        .then( result => {
            const user = result.user;
            console.log(user);
        })

        .catch( error => {
            console.log('Error', error.message);
        })
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