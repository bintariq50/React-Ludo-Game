import Button from "./Button"
import "./LudoBoard.css"

import { useState } from "react"


function rollDice() {
    return (Math.floor(Math.random() * 6) + 1)
}

export default function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 })
    const [dice, setDice] = useState(0);
    const [turn, setTurn] = useState(0)

    const styles = [
        { backgroundColor: "blue" },
        { backgroundColor: "red" },
        { backgroundColor: "yellow", color: "black" },
        { backgroundColor: "green" }
    ];

    const playerNames = ["Blue", "Red", "Yellow", "Green"];

    let diceRoll = () => {
        const diceValue = rollDice()
        setDice(diceValue)

        if (turn === 0) {
            setMoves((curr) => ({ ...curr, blue: diceValue }));
            setTurn(1)
            return;
        }
        else if (turn === 1) {
            setMoves((curr) => ({ ...curr, red: diceValue }));
            setTurn(2);
            return;
        }
        else if (turn === 2) {
            setMoves((curr) => ({ ...curr, yellow: diceValue }));
            setTurn(3);
            return;
        }
        else if (turn === 3) {
            setMoves((curr) => ({ ...curr, green: diceValue }));
            setTurn(0);
            return;
        }
        else {
            return null;
        }
    }



    return (

        <div className="board">
            <h1>Ludo Game</h1>

            <p>Game Begins!!</p>
            <button onClick={diceRoll} className="dice">Roll Dice</button>
            <p className="diceColor">It's {playerNames[turn]} Turn</p>

            <div className="button-grid">
                <Button name="Blue" move={moves.blue} styles={styles[0]} />
                <Button name="Red" move={moves.red} styles={styles[1]} />
                <Button name="Yellow" move={moves.yellow} styles={styles[2]} />
                <Button name="Green" move={moves.green} styles={styles[3]} />
            </div>

        </div>
    );

}