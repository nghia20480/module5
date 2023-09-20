import {useState, useEffect} from "react";

function useCounter(addAmount) {
    const [count, setCount] = useState(1)

    function increase() {
        setCount(count + addAmount)
    }

    return (
        [count, increase]
    )

}

export default useCounter
