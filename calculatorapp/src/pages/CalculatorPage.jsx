import React, { useState } from 'react'
import { Message } from '../components/Message2'
import { Button } from '../components/Button2'

export const CalculatorPage = () => {
    const [output, setOutput] = useState('');

    const logic=(buttonValue)=>{
        if(buttonValue === '='){
            setOutput(eval(output))
        }
        else if(buttonValue === 'AC'){
            setOutput('')
        }
        else{
            setOutput(output + buttonValue.toString())
        }
    }

  return (
    <div className="container" style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px', minHeight: '100vh' }}>
        <Message className="" value= "Calculator"/>
        <Message className="info" value= "Answer is " outputValue={output}/>
        <table style={{ margin: '0 auto'}}>
        <tr>
        <td><Button fn={logic} className= "secondary" value= "("/></td>
        <td><Button fn={logic} className= "secondary" value= ")"/></td>
        <td><Button fn={logic} className= "secondary" value= "%"/></td>
        <td><Button fn={logic} className= "secondary" value= "AC"/></td>
        </tr>

        <tr>
        <td><Button fn={logic} className= "dark" value= "7"/></td>
        <td><Button fn={logic} className= "dark" value= "8"/></td>
        <td><Button fn={logic} className= "dark" value= "9"/></td>
        <td><Button fn={logic} className= "secondary" value= "/"/></td>
        </tr>

        <tr>
        <td><Button fn={logic} className= "dark" value= "4"/></td>
        <td><Button fn={logic} className= "dark" value= "5"/></td>
        <td><Button fn={logic} className= "dark" value= "6"/></td>
        <td><Button fn={logic} className= "secondary" value= "*"/></td>
        </tr>

        <tr>
        <td><Button fn={logic} className= "dark" value= "1"/></td>
        <td><Button fn={logic} className= "dark" value= "2"/></td>
        <td><Button fn={logic} className= "dark" value= "3"/></td>
        <td><Button fn={logic} className= "secondary" value= "-"/></td>
        </tr>

        <tr>
        <td><Button fn={logic} className= "dark" value= "0"/></td>
        <td><Button fn={logic} className= "dark" value= "."/></td>
        <td><Button fn={logic} className= "secondary" value= "="/></td>
        <td><Button fn={logic} className= "secondary" value= "+"/></td>
        </tr>

        </table>

    </div>
  )
}
