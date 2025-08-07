import Button from "./Button"
import "./LudoBoard.css"
import { useState } from "react"


function rollDice() {
    return (Math.floor(Math.random() * 6) + 1)
}

export default function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 })
    const [dice, setDice] = useState(0);


    const styles = [
        { backgroundColor: "blue" },
        { backgroundColor: "red" },
        { backgroundColor: "yellow" },
        { backgroundColor: "green" }
    ];

    let diceRoll = () => {
        const diceValue = rollDice()
        setDice(diceValue)

        if (turn === 0) {
            return setBlue(dice)
        }
        else if (turn === 1) {
            setDice(rollDice)
            return setRed(dice)
        }
        else if (turn === 2) {
            setDice(rollDice)
            return setYellow(dice)
        }
        else if (turn === 3) {
            setDice(rollDice)
            return setGreen(dice)
        }
        else {
            return null;
        }
    }

    let setBlue = (diceValue) => {
        turn = 1;
        setMoves((currMove) => {
            return { ...currMove, blue: currMove.blue + diceValue }
        })
    }

    let setRed = (diceValue) => {
        turn = 2;

        setMoves((currMove) => {
            return { ...currMove, red: currMove.red + diceValue }
        })
    }
    let setYellow = (diceValue) => {
        turn = 3;

        setMoves((currMove) => {
            return { ...currMove, yellow: currMove.yellow + diceValue }
        })
    }
    let setGreen = (diceValue) => {
        turn = 0;

        setMoves((currMove) => {
            return { ...currMove, green: currMove.green + diceValue }
        })
    }
    return (
        <div className="board">

            <p>Games Begins!!</p>
            <button onClick={diceRoll}>Roll Dice</button>
            <div className="board">
                <Button name="Blue" move={moves.blue} styles={[styles[0]]} />
                <Button name="Red" move={moves.red} styles={styles} />
                <Button name="Yellow" move={moves.yellow} styles={styles} />
                <Button name="Green" move={moves.green} styles={styles} /></div>

        </div>)
}