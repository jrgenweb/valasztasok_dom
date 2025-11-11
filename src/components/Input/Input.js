import "./Input.module.scss";
export default function Input(props) {
  function onKeyUp(event) {
    props.onValueChange(event.target.value);
  }
  return (
    <div className="form-control">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        itemType={props.type}
        name={props.name}
        id={props.name}
        onKeyUp={onKeyUp}
        placeholder={props.label}
      />
    </div>
  );
}
