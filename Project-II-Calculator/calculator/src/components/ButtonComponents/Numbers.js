import React from 'react';
import './Button.css';
import NumberButton from './NumberButton.js';

class Numbers extends React.Component{
    constructor(props){
        super(props);
        this.appendNumbers = function(){
            this.setState.numbersPressed.push(props.name)
            console.log(this.state)
        }
    }

    render(){
        let i;
        const calcNumbers = []

        for (i=0;i<10;i++){
            calcNumbers.push(9-i)
    }
        return(
            <div className = "Numbers-container">
                {calcNumbers.map(number =>{
                    return <NumberButton onClick = {this.appendNumbers} name = {number} className = {`number${number}`}/>
                })}
            </div>
        )
    }
}
// const Numbers = props => {
//     var i;
//     const calcNumbers = []
    
//     for (i=0;i<10;i++){
//         calcNumbers.push(9-i)
//     }

//     return(
//         <div className = "Numbers-container">
//             {calcNumbers.map(number =>{
//                 return <NumberButton name = {number} className = {`number${number}`}/>
//             })}
//         </div>
//     )
// }

export default Numbers;