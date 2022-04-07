import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    return (<div>
        <h1>Home {count}</h1>
        <button onClick={() => setCount(current => current + 1)}>Click me</button>
    </div>)
}