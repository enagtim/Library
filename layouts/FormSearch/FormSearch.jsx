import ButtonSearch from "../../components/ButtonSearch/ButtonSearch";
import SearchBar from "../../components/SearchBar/SearchBar";
import stylename from "./FormSearch.module.css";
function FormSearch() {
  const formSumbit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={stylename["form"]} onSubmit={formSumbit}>
      <SearchBar />
      <ButtonSearch />
    </form>
  );
}

export default FormSearch;
