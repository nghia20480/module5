import logo from './logo.svg';
import './App.css';
import CarSelector from "./CarSelector";
import Counter1 from "./counter";
import Counter2 from "./counter";
import useCounter from "./hooks/useCounter";

function App() {
    const Counter1 = () => {
        const [count, increase] = useCounter(1)

        return (
            <>
                <h1>{count}</h1>
                <button onClick={increase}>+1</button>
            </>
        )
    }
    const Counter2 = () => {
        const [count, increase] = useCounter(2)

        return (
            <>
                <h1>{count}</h1>
                <button onClick={increase}>+2</button>
            </>
        )
    }
    return (<div>
        <Counter1/>
        <Counter2/>
    </div>)

}

export default App;
