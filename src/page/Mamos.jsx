import { useMemo, useState } from 'react';
import { background } from '../hoc/background';

const Mamos = () => {
    const [result, setResult] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    
    const calculate = (a,b) => {
        console.log('Calculating ===>> ', a, b);
        return a +' '+ b;
    };
    
    const memoizedValue = useMemo(() => calculate(input1, input2), [input1, input2]);

    const buttonClickHandler = () => {
        // const r = memoizedValue(input1,input2);
        // console.log(memoizedValue);
        setResult(memoizedValue);
    };


    return (
        <div>
            <div>
                <label>First Name</label>
                <input 
                    type="text"
                    value={input1}
                    onChange={(e)=>{setInput1(e.target.value);}}/>
            </div>
            <div>
                <label>Last Name</label>
                <input 
                    type="text"
                    value={input2}
                    onChange={(e)=>{setInput2(e.target.value);}}/>
            </div>
            <div>
                <button onClick={buttonClickHandler}>Get Full Name</button>
            </div>
            <div>
                {result}
            </div>
            
        </div>
    );
};

export default background(Mamos);