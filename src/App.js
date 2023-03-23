import { useReducer } from 'react';
import DigitButton from './DigitButton';
import './App.css';

//IMPORTS ARE DONE ABOVE THIS LINE
//actions that our reducer function will take as second arguments.
export const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE:'evaluate'
};
const currentOperand = 0;
//THIS APP USES CSS GRID FOR THE STYLING OF THE CALCULATOR DESIGNS
//Below is the useReducer's takein function
function reducer(state,{type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return{
        ...state,currentOperand:`${currentOperand || ""} ${payload.digit}`, 

      }
  }
}
function App() {

  const [{ currentOperand, prevOperand, operation }, dispatch] = useReducer(reducer, {});
  //dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})
  return (
    <div className="App">
      <div className="calculator-grid">
        {/*This container holds the entire resources inside the calculator. */}
        {/*The div below contains the display of the calculations */}
        <div className="display">
          <div className="prev-operand">
            {prevOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>

        {/*THE BUTTONs BELOW CONTAIN THE BUTTONS OF THE CALCULATOR */}
        <button className="span-two">AC</button>
        <button className="del">DEL</button>
        <DigitButton digit="/" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <DigitButton digit="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <DigitButton digit="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <DigitButton digit="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
