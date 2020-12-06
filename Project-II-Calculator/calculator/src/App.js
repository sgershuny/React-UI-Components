import React from 'react';
import './App.css';
import Keypad from './components/ButtonComponents/Keypad'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'



// const App = () => {

//   return (
//     <div>
//       <CalculatorDisplay />
//       <Keypad />
//     </div>

//   );
// };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbersPressed: [],
      operation: []
    };
  }
  

  render() {
    
    return (
      <div>
        <CalculatorDisplay numbersPressed = {this.state.numbersPressed} operation ={this.state.numbersPressed}/>
        <Keypad numbersPressed = {this.state.numbersPressed} operation ={this.state.numbersPressed}/>
      </div>
  
    );
  };
}

export default App;