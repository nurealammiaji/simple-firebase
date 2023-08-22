import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase.init';
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLoginHandler = () => {

        signInWithPopup(auth, googleProvider)

        .then( result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })

        .catch( error => {
            console.log('Google Login Error: ', error.message);
        })
    }

    const githubLoginHandler = () => {

        signInWithPopup(auth, githubProvider)

        .then( result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch( error => {
            console.log('Github Login Error: ', error);
        })
    }

    const logoutHandler = () => {

        signOut(auth)

        .then(result => {
            console.log("Logout Successfully", result);
            setUser(null);
        })
        .catch(error => {
            console.log('Logout Error: ', error.message);
        })
    }

    return (
        <div>
            <br /><br />
            <div className="text-center">
                <form className="[&>*]:border [&>*]:my-2 [&>*]:rounded-2xl [&>*]:p-2 bg-yellow-400 p-5 w-6/12 mx-auto rounded-2xl">
                    <input type="email" name="email" placeholder="Type Email" />
                    <br />
                    <input type="password" name="password" placeholder="Type Password" />
                    <br />
                    <button className="px-5 py-2 font-semibold text-white bg-blue-950" type="submit">Login</button>
                    <button className="px-5 py-2 ml-2 font-semibold text-white bg-blue-950" type="button">Reset</button>
                </form>
            </div>
            <br />
            <div className="text-center">
                { user ?
                    <button className="px-5 py-2 bg-yellow-400 rounded-md" onClick={logoutHandler}>Logout</button> :
                    <div className="[&>*]:mx-2">
                        <button className="px-5 py-2 font-semibold text-white rounded-md bg-blue-950" onClick={googleLoginHandler}>Google Login</button>
                        <button className="px-5 py-2 font-semibold text-white rounded-md bg-blue-950" onClick={githubLoginHandler}>Github Login</button>
                    </div>
                }
            </div>
            { user &&
                <div className="w-6/12 mx-auto">
                    <br /><br />
                    <div>
                        <img src={user.photoURL} alt="" />
                    </div>
                    <br />
                    <h3>Name: {user ? user.displayName : user.reloadUserInfo.displayName}</h3>
                    <h3>Email: {user ? user.email : user.providerUserInfo[0].email}</h3>
                </div>
            }
        </div>
    );
};

export default Login;