import { useState } from "react";

function UseState() {
    const [name, setName] = useState("Patel");

    const [isseVisibele, setIsVisible] = useState(true);

    const [user, setUser] = useState({
        name: "King",
        age: 27,
        city: "Surat"
    });

    function handleClick() {
        setName("King");
    }

    function handleVisibility() {
        console.log("isseVisibele  : ", isseVisibele);
        setIsVisible(!isseVisibele);
    }

    function changeName() {
        setUser({
            ...user,
            name: "Patel"
        });
    }

    return (
        <div className="header">
            <h1>UseState Component</h1>
            <p>Name: {name}</p>
            <button className="btn btn-primary" onClick={handleClick}>
                Click Me
            </button>
            {isseVisibele && <p>This is a visible paragraph</p>}
            <button className="btn btn-primary" onClick={handleVisibility}>
                Toggle Visibility
            </button>
            <div>
                <h2>{user.name}</h2>
                <p>{user.age}</p>
                <p>{user.city}</p>

                <button onClick={changeName}>
                    Change Name
                </button>
            </div>
        </div>
    )
}

export default UseState;