import Input from "../Input/Input";
import stylename from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={stylename["wrapper"]}>
      <img src="/search24.svg" alt="Иконка поиска" />
      <Input type="text" placeholder="Найти книгу или автора...." />
    </div>
  );
}

export default SearchBar;
