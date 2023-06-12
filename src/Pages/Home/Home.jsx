import Banner from "./Banner";
import Instructors from "../Instructors/Instructors";
import Class from "../Class/Class";
import Review from "./Review/Review";
const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div>
                Popular Instructors
            </div>
            <Instructors></Instructors>
            <div>
                Popular Classes
            </div>
            <Class></Class>
            <Review></Review>
            home

        </div>
    );
};

export default Home;