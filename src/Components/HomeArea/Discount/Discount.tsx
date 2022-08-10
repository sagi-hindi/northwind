import "./Discount.css";

function Discount(): JSX.Element {
    const discount = 15
    return (
        <div className="Discount Box">
            <p>Only now {discount}% discount all products!</p>
        </div>
    );
}

export default Discount;
