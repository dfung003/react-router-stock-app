import { Link } from 'react-router-dom'


export default function Dashboard({ stocks }) {

    return (
        <div className="stock-list">
            <ul className="list-items">
                {stocks.map(stock => {
                    return (
                        <li>
                            <Link to={`/stocks/${stock.symbol}`}>
                                {stock.name}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}