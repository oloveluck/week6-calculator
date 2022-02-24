import {useState } from 'react';
import './Calculator.css';
import { CalculatorModel } from './CalculatorModel'

function CalculatorDisplay(props : {arg : string}) {
  return <div className="calculator-display">{props.arg}</div>;
}
function CalculatorKey(arg: any) {
  return <button className={`calculator-key ${arg.className}`}  onClick={arg.onPress}>{arg.label}</button>;         
}
export default function Calculator() {
  const [display , setDisplay] = useState("0"); 
  const calcState = new CalculatorModel(); 

  return (
    <div className="calculator">
      <CalculatorDisplay arg={display}/>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey className="key-clear" label="C" onPress={() => {
              calcState.pressClear();
              setDisplay(calcState.display())
            }}>{'C'}</CalculatorKey>
            <CalculatorKey className="key-sign" label="±" onPress={() => {}}>±</CalculatorKey>
            <CalculatorKey className="key-percent" label="√" onPress={() => {}}>√</CalculatorKey>
          </div>
          <div className="digit-keys">
            <CalculatorKey className="key-0" label="0" onPress={() => {
              calcState.pressZero();
              setDisplay(calcState.display());
            }}></CalculatorKey>
            <CalculatorKey className="key-dot" label="•" onPress={() => {
              calcState.pressDot();
              setDisplay(calcState.display);
            }}>●</CalculatorKey>
            <CalculatorKey className="key-1" label="1" onPress={() => {
              calcState.pressOne();
              setDisplay(calcState.display());
             }}>1</CalculatorKey>
            <CalculatorKey className="key-2" label="2" onPress={() => { 
              calcState.pressTwo();
              setDisplay(calcState.display());
             }}>2</CalculatorKey>
            <CalculatorKey className="key-3" label="3" onPress={() => {
              calcState.pressThree();
              setDisplay(calcState.display());
            }}>3</CalculatorKey>
            <CalculatorKey className="key-4" label="4" onPress={() => { 
              calcState.pressFour();
              setDisplay(calcState.display());
             }}>4</CalculatorKey>
            <CalculatorKey className="key-5" label="5" onPress={() => { 
              calcState.pressFive();
              setDisplay(calcState.display())
            }}>5</CalculatorKey>
            <CalculatorKey className="key-6" label="6" onPress={() => { 
              calcState.pressSix();
              setDisplay(calcState.display());
            }}>6</CalculatorKey>
            <CalculatorKey className="key-7" label="7" onPress={() => { 
              calcState.pressSeven();
              setDisplay(calcState.display());
            }}>7</CalculatorKey>
            <CalculatorKey className="key-8" label="8" onPress={() => {
              calcState.pressEight();
              setDisplay(calcState.display());
            }}>8</CalculatorKey>
            <CalculatorKey className="key-9" label="9" onPress={() => { 
              calcState.pressNine();
              setDisplay(calcState.display());
            }}>9</CalculatorKey>
          </div>
        </div>
        <div className="operator-keys">
          <CalculatorKey className="key-divide" label="/" onPress={() => { alert('key-divide pressed'); }}>÷</CalculatorKey>
          <CalculatorKey className="key-multiply" label="×" onPress={() => {
            calcState.pressMult();
           }}>*</CalculatorKey>
          <CalculatorKey className="key-subtract" label="-" onPress={() => { 
            calcState.pressMinus();
          }}>−</CalculatorKey>
          <CalculatorKey className="key-add" label="+" onPress={() => { 
            calcState.pressPlus();
           }}>+</CalculatorKey>
          <CalculatorKey className="key-equals" label="=" onPress={() => { 
            calcState.pressEquals();
           }}>=</CalculatorKey>
        </div>
      </div>
    </div>
  )
}