function Footer() {
    function handleClick() {
        console.log("Hello World");
    }

    return (
        <div className="header">
            <h1>Footer Component</h1>

            <button className="btn btn-primary" onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default Footer