import "./Sales.css";

//creating data type
interface SalesProps{
    percent:number;
    Category:string;
}


function Sales(props: SalesProps): JSX.Element {
    
    return (
        <div className="Sales">
            <p> Sale:{props.percent} % discount on all {props.Category} </p>
			
        </div>
    );
}

export default Sales;
