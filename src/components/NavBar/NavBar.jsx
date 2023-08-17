import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex justify-between items-center">
            <div>
                <NavLink to="/"><h2 className="text-3xl font-bold">Simple Firebase</h2></NavLink>
            </div>
            <div className="[&>*]:p-5 hover:[&>*]:bg-yellow-400 font-semibold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;