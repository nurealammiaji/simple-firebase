import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div>
            <br /><br />
            <div className="text-center">
                <form className="[&>*]:border [&>*]:my-2 [&>*]:rounded-2xl [&>*]:p-2 bg-yellow-400 p-5 w-6/12 mx-auto rounded-2xl">
                    <input type="text" name="name" placeholder="Type Name" />
                    <br />
                    <input type="email" name="email" placeholder="Type Email" />
                    <br />
                    <input type="password" name="password" placeholder="Type Password" />
                    <br />
                    <button className="px-5 py-2 font-semibold text-white bg-blue-950" type="submit">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;