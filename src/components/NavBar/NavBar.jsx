import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-green-200 py-5">
            <div className="ml-2">
                <NavLink to="/"><h2 className="text-3xl font-bold">Simple Firebase</h2></NavLink>
            </div>
            <div className="[&>*]:px-3 [&>*]:py-2 hover:[&>*]:bg-yellow-400 hover:[&>*]:rounded-2xl font-semibold mr-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;