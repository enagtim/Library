import stylename from "./Input.module.css";
function Input({ ...props }) {
  return <input className={stylename["input"]} {...props} />;
}

export default Input;
