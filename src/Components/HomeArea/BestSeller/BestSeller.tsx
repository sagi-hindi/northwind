import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    // const arr = useState("")
    // const name = arr[0];
    // const setName = arr[1]
    const [name, setName] = useState("")

    // const itemsArray = useState(0)
    // const totalItems = itemsArray[0]
    // const setTotalItems = itemsArray[1]
    const [totalItems, setTotalItems] = useState(0)
    const[book,showBook] = useState('')


    function show():void {
        //  name = "Exotic Liquids";
        setName("Exotic Liquids")
        setTotalItems(170)

    }
    function showBestSeller(){
        showBook('hari poter')


    }
    return (
        <div className="BestSeller Box">
            <p>
                <button onClick={show}>Best Seller</button>
                <span>Name: {name}</span>
                <span>, totalItems: {totalItems}</span>
            </p>
            <button onClick={showBestSeller}>show Book</button>
            <span>Book: {book}</span>
			
        </div>
    );
}

export default BestSeller;
