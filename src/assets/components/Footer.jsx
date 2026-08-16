import { useState } from "react";

function Footer() {

    const [count, setCount] = useState(0);

    // 1. Changes the state
    //    ↓
    // 2. Tells React to render again
    //    ↓
    // 3.UI gets the new count

    function handleClick() {
        console.log("Hello World");
        setCount(count + 1);
        console.log("Count: ", count);
    }

    return (
        <div className="header">
            <h1>Footer Component</h1>
            <p>Count: { count }</p>
            <button className="btn btn-primary" onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default Footer