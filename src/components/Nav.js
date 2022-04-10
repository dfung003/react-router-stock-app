import { Link } from 'react-router-dom';



export default function Nav() {
    return (
        <nav className='nav'>
            <Link className="nav-link" to="/">
                <h1>iStocks</h1>
            </Link>
            <Link className="nav-link" to="/stocks">
                <div>Stocks</div>
            </Link>
            <Link className="nav-link" to="/about">
                <div>About</div>
            </Link>
        </nav>
    )
}