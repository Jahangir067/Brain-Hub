import { Helmet } from "react-helmet-async";
import PopularInstructor from "../../Shared/PopularInstructor/PopularInstructor";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularClassess from "../PopularClassess/PopularClassess";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Brain Hub | Home</title>
            </Helmet>
           <Banner></Banner>
           <PopularClassess></PopularClassess>
           <PopularInstructor></PopularInstructor>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;