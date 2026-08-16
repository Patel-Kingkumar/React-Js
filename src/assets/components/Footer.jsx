function Footer() {
    function handleClick() {
        console.log("Hello World");
    }

    return (
        <div>
            <h1>Footer Component</h1>

            <button className="btn btn-primary" onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default Footer