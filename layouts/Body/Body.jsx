import FormSearch from "../FormSearch/FormSearch";
import stylename from "./Body.module.css";
function Body() {
  return (
    <div className={stylename["body"]}>
      <FormSearch />
      <h1>Найдено книг</h1>
    </div>
  );
}

export default Body;
