import Banner from "./Banner";
import Instructors from "../Instructors/Instructors";
import Class from "../Class/Class";
import Review from "./Review/Review";
const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Instructors></Instructors>
            <Class></Class>
            <Review></Review>
           

        </div>
    );
};

export default Home;