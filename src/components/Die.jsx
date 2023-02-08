export default function Die(props) {
  return (
      <div className="die">
        <p className="die__face">{props.value}</p>
      </div>
  );
}
