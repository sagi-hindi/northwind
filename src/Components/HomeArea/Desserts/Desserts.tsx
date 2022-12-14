import "./Desserts.css";

function Desserts(): JSX.Element {
    const allDesserts = [
        {id: 1, name: "Ice Cream"},
        {id: 2, name: "Pavlova"},
        {id: 3, name: "Eclair"},
        {id: 4, name: "Apple Pie"}
    ];

    return (
        <div className="Desserts">
            <p>
            {allDesserts.map((item)=> <span key={item.id}>| {item.name} </span>)}
            </p>
			
        </div>
    );
}

export default Desserts;
