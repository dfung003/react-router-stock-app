import { Link } from 'react-router-dom';



export default function Nav() {
    return (
        <nav className='nav'>
            <Link to="/">
                <h1>iStocks</h1>
            </Link>
            <Link to="/stocks">
                <div>Stocks</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </nav>
    )
}