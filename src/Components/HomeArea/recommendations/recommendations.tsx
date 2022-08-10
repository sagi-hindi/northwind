import { SyntheticEvent } from "react";
import "./recommendations.css";

function Recommendations(): JSX.Element {
    function recommend1(){
        alert("Test-1");
    }

    function recommend2(args:SyntheticEvent){
        console.log(args.target);
        alert('Test-2')
    }




    return (
        <div className="recommendations Box">
            <p>
                <button onClick={recommend1}>recommend 1</button>
                <button onClick={recommend2}>recommend 2</button>
            </p>
			
        </div>
    );
}

export default Recommendations;
