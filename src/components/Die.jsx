export default function Die(props) {
  // console.log(props)
  return (
    <div
      className={`die ${props.isHeld ? "isHeld" : ""}`}
      onClick={props.holdDice}
    >
      <p className="die__face">{props.value}</p>
    </div>
  );
}
