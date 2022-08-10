import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Recommendations from "../recommendations/recommendations";
import Sales from "../Sales/Sales";
import Suggestions from "../Suggestions/Suggestions";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>Menu</h2>
            <Discount/>
            <Desserts/>
            <Recommendations/>
            <Sales percent={10} Category="drinks"/>
            <Sales percent={15} Category="fruits"/>
            <BestSeller/>
            <Clock/>
            <Suggestions header="Cool Suggestions-2"/>
            

        </div>
        
    );
}

export default Home;
