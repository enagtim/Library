import stylename from "./Logo.module.css";
function Logo() {
  return <img className={stylename["logo"]} src="/Logo.svg" alt="Логотип" />;
}

export default Logo;
