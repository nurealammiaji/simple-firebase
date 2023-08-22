import image from "../../../public/firebase.png";

const Home = () => {
    return (
        <div>
            <br /><br />
            <div className="grid grid-cols-2">
                <div>
                    <div>
                        <h1>Simple</h1>
                        <h1>Firebase</h1>
                        <h1>Authentication</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi vitae voluptates pariatur debitis consequatur aliquam, error necessitatibus veritatis cumque alias. Minima earum culpa nostrum corporis dolor quis maxime veritatis officia.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;