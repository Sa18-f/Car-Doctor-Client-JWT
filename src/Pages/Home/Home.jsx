import About from "./About";
import Banner from "./Banner";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <div className="mb-12">
                <Banner></Banner>
            </div>
            <About></About>
            <div className="my-12">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;