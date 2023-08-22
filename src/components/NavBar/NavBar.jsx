import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex items-center justify-between py-5 bg-green-200">
            <div className="ml-2">
                <NavLink to="/"><h2 className="text-3xl font-bold">Simple Firebase</h2></NavLink>
            </div>
            <di className="[&>*]:px-3 [&>*]:py-2 hover:[&>*]:bg-yellow-400 hover:[&>*]:rounded-2xl font-semibold mr-3">
                <NavLink className={({ isActive}) => isActive ? "bg-yellow-400 rounded-2xl" : ""} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-yellow-400 rounded-2xl" : ""} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? "bg-yellow-400 rounded-2xl" : ""} to="/login">Login</NavLink>
            </di>
        </nav>
    );
};

export default NavBar;