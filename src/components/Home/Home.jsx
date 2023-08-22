import { Link } from "react-router-dom";
import image from "../../../public/firebase.png";

const Home = () => {
    return (
        <div>
            <br /><br />
            <div className="grid grid-cols-2">
                <div className="p-8 bg-yellow-400">
                    <h3 className="text-2xl font-semibold">Welcome !!</h3>
                    <br />
                    <div className="[&>*]:text-4xl [&>*]:font-bold">
                        <h1>Simple Firebase</h1>
                        <h1>Authentication</h1>
                    </div>
                    <br />
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi vitae voluptates pariatur debitis consequatur aliquam, error necessitatibus veritatis cumque alias. Minima earum culpa nostrum corporis dolor quis maxime veritatis officia.</p>
                    <br />
                    <Link to="/registration"><button className="px-5 py-3 font-semibold text-white bg-blue-950 rounded-xl">Get Started</button></Link>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;