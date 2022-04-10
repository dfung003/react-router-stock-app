import data from "../../data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stocks(props) {
    const [stock, setStock] = useState({});
    const { symbol } = useParams()
    const findBySymbol = () => {
        setStock(data.find((element) => {
            return (element.symbol === symbol)
        }))
    }
    useEffect(() => {
        findBySymbol()
    }, [])
    return (
        <div className="stocks">
            <h1>Name: {stock.name}</h1>
            <h1>Price: {stock.lastPrice}</h1>
        </div>
    )
}