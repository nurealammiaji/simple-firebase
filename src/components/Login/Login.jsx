import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase.init';
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const loginHandler = () => {

        signInWithPopup(auth, provider)

        .then( result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })

        .catch( error => {
            console.log('Login Error', error.message);
        })
    }

    const logoutHandler = () => {

        signOut(auth)

        .then(result => {
            console.log("Logout Successfully", result);
            setUser(null);
        })
        .catch(error => {
            console.log('Logout Error', error.message);
        })
    }

    return (
        <div>
            <h3>Login Page</h3>
            <br /><br />
            <div className="text-center">
                { user ?
                    <button className="bg-yellow-400 py-2 px-5 rounded-md" onClick={logoutHandler}>Logout</button> :
                    <button className="bg-yellow-400 py-2 px-5 rounded-md" onClick={loginHandler}>Login</button>
                }
            </div>
            { user &&
                <div className="w-6/12 mx-auto">
                    <br /><br />
                    <div>
                        <img src={user.photoURL} alt="" />
                    </div>
                    <br />
                    <h3>Name: {user.displayName}</h3>
                    <h3>Email: {user.email}</h3>
                </div>
            }
        </div>
    );
};

export default Login;