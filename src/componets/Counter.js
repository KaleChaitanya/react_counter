import React from "react";

export default function Counter() {

    const [count, setCount] = React.useState(0);

    function handleMinus() {
        setCount(count - 1)
    }
    function handlePlus() {
        setCount(count + 1)
    }
    return (
        <>
            <div className="container">
                <button onClick={handleMinus} className="btn counter--minus">-</button>
                <h1 className="count--el">{count}</h1>
                <button onClick={handlePlus} className="btn counter--plus">+</button>
            </div>
        </>
    )
}