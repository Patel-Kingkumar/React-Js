import style from './Header.module.css'

function Header(props) { 
    return (
        <div className={style.header}>
            <h1>Header Component</h1>
            <p>Welcome, {props.name}!</p>
        </div>
    )
}

export default Header