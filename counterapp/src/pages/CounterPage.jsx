import React, { useState } from 'react'
import { Message } from '../components/Message'
import { Button } from '../components/Button'

const CounterPage = () => {
    //let count = 0;
    const [count, setCount] = useState(0); //now u can do state handling
    const logic=(buttonValue)=>{
        if(buttonValue === '+'){
            setCount(count +1) //re rendering(will call this fn again)
            //count++;
        }
        else{
            setCount(count -1)
            //count--;
        }
        console.log('Count is ', count);
    }
    return (
        <div className="container" style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px', minHeight: '100vh' }}>
            <Message className=" " value="Counter App" />
            <Message className="success" value="Count value is" countValue={count} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button fn={logic} className="success" value="+" />
            <Button fn={logic} className="danger" value="-" />
            </div>

        </div>
    )
}

export default CounterPage;