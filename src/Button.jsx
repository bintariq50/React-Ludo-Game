import "./Button.css"
export default function Button({ name, move, styles }) {
    return (
        <>
            {/* <p>{name} Moves = {move}</p> */}
            <div className="container" style={styles} >{move}</div>
        </>
    )
}