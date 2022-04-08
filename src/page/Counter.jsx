import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    //Side - Effect 
    //setCount(count+1)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{setCount(count+1);}}>Click Me</button>
        </div>
    );
};

export default Counter;