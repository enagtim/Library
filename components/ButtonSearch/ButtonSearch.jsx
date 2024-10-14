import stylename from "./ButtonSearch.module.css";
function ButtonSearch() {
  return (
    <button className={stylename["button"]}>
      <img src="/search32.svg" alt="Иконка поиска" />
    </button>
  );
}

export default ButtonSearch;
