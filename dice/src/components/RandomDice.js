import React, {useState} from 'react' 
import Button from 'react-bootstrap/button'
import {makeDie} from '../lib'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Die from './Die'
import './stylize.css'


const RandomDice = (props) => {
    
    let [dice,setDice] = useState([])
    let [sides,setSides] = useState()
    
    const addDieOnClickHandler= (event) => {

        event.preventDefault()

        let copyDice = [...dice]

        copyDice.push(makeDie(sides))

        setDice(copyDice)

    }


    const sidesOnChangeHandler  = (event) => {
        
        event.preventDefault()
        setSides(event.target.value)
    }

    return (
        <div>
            <h1>Dice Roller</h1>
            <h4>Add A New Die</h4>
            <InputGroup className="mb-3 make-die-size">
            <FormControl
                placeholder="Sides"
                aria-label="Sides"
                aria-describedby="basic-addon2"
                onChange= {sidesOnChangeHandler}
                value={sides}
                />
                    <InputGroup.Append>
                       <Button varient="outline-secondary" onClick={addDieOnClickHandler}>Add</Button>
                   </InputGroup.Append>
            </InputGroup>
            <br></br>
            {
                dice.map((die,index) => {
                    return (
                        <Die key={index} sides={die.sides}></Die>
                    )
                })
            }
        </div>
    );
};

export default RandomDice;