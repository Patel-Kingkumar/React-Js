import { useState } from 'react';

function ConditionRender() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function renderContent() { }

    // // 1. &&
    // {isLoggedIn && <h2>Welcome</h2>}

    // // 2. Ternary
    // {isLoggedIn ? <h2>Welcome</h2> : <button>Login</button>}

    // // 3. if/else
    // if (isLoggedIn) {
    // ...
    // }

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
        </>

    );
}

export default ConditionRender;