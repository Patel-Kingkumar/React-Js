import { useState, useEffect } from 'react';

function ConditionRender() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fruits = ["Apple", "Banana", "Mango"];

    function renderContent() { }

    // // 1. &&
    // {isLoggedIn && <h2>Welcome</h2>}

    // // 2. Ternary
    // {isLoggedIn ? <h2>Welcome</h2> : <button>Login</button>}

    // // 3. if/else
    // if (isLoggedIn) {
    // ...
    // }

    useEffect(() => {
        console.log("Component mounted or updated");
    }, [isLoggedIn]);

    return (
        <>
            <div>
                {isLoggedIn ? (
                    <div>
                        <h1>Welcome, User!</h1>
                    </div>
                ) : (
                    <div>
                        <h1>Please log in.</h1>
                    </div>
                )}
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? "Log Out" : "Log In"}
                </button>
            </div>
            <div>
                {fruits.map((fruit) => (
                    <button key={fruit}>{fruit}</button>
                ))}
            </div>
        </>

    );
}

export default ConditionRender;