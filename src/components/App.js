import React, { useReducer } from 'react';
import reducer, { initialState as initialValues } from '../reducers';
import { applyNumber, changeOperation } from '../actions'; //the FUNCTION, not just the constant !

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import './App.css';

function App() {

  
  const [state, dispatch] = useReducer(reducer, initialValues); //we use the useReducer hook, not the useState hook because that way we can pass the reducer AND values to it!! This means we can actually call our reducer!
  
  // const handleOneClick = () => {
  //   dispatch(addOne());
  // }

  const handleNumClick = (number) => {
    dispatch(applyNumber(number));
  }

  const handleChangeOp = (operation) => {
    dispatch(changeOperation(operation))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={ (e)=> handleNumClick(e.target.value) } />
              {/*THIS MUST BE A FUNCTION DEFINITION, NOT AN EXECUTION, OTHERWISE BAD THINGS WILL HAPPEN TO OUR BELOVED APP !*/}
              {/*Must capture the event target to use value like this !*/}
              <CalcButton value={2} onClick={ (e)=> handleNumClick(e.target.value) } />
              <CalcButton value={3} onClick={ (e)=> handleNumClick(e.target.value) } />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={ (e)=> handleNumClick(e.target.value) } />
              <CalcButton value={5} onClick={ (e)=> handleNumClick(e.target.value) } />
              <CalcButton value={6} onClick={ (e)=> handleNumClick(e.target.value) } />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={ (e)=> handleNumClick(e.target.value) } />
              <CalcButton value={8} onClick={ (e)=> handleNumClick(e.target.value) } />
              <CalcButton value={9} onClick={ (e)=> handleNumClick(e.target.value) } />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={ (e)=> handleChangeOp(e.target.value) } />
              <CalcButton value={"*"} onClick={ (e)=> handleChangeOp(e.target.value) }/>
              <CalcButton value={"-"} onClick={ (e)=> handleChangeOp(e.target.value) }/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
