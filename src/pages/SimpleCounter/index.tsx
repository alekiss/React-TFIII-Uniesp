import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa";
import "./styles.css"

const SimpleCounter = () => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount((prev) => prev + 1);
    }

    const handleMinus = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <div className="counter_container">
            <div className="counter_number">
                <h1>{count}</h1>
            </div>
            <div className="counter_button">
                <button onClick={handleMinus}><FaMinus /></button>
                <button onClick={handlePlus}><FaPlus /></button>
            </div>
        </div>
    )
}

export default SimpleCounter