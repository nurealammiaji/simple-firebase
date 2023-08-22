import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex items-center justify-between py-5 bg-blue-950 rounded-2xl [&>*]:mx-5 text-white">
            <div className="ml-2">
                <NavLink to="/"><h2 className="text-3xl font-bold hover:text-yellow-400">Simple Firebase</h2></NavLink>
            </div>
            <di className="[&>*]:px-3 [&>*]:py-2 hover:[&>*]:bg-yellow-400 hover:[&>*]:rounded-2xl font-semibold mr-3 [&>*]:mx-2 hover:[&>*]:text-black">
                <NavLink className={({ isActive}) => isActive ? "bg-yellow-400 rounded-2xl text-black" : ""} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-yellow-400 rounded-2xl text-black" : ""} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-yellow-400 rounded-2xl text-black" : ""} to="/registration">Registration</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-yellow-400 rounded-2xl text-black" : ""} to="/login">Login</NavLink>
            </di>
        </nav>
    );
};

export default NavBar;