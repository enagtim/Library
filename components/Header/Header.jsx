import BookCount from "../BookCount/BookCount";
import Logo from "../Logo/Logo";
import NavigationPage from "../NavigationPage/NavigationPage";
import stylename from "./Header.module.css";
function Header() {
  return (
    <div className={stylename["header"]}>
      <Logo />
      <div className={stylename["wrapper"]}>
        <nav className={stylename["navigation"]}>
          <NavigationPage
            isPage={true}
            src="/search.svg"
            alt="Иконка поиска"
            text="Поиск книг"
          />
          <NavigationPage
            src="/favorites.svg"
            alt="Иконка избранное"
            text="Избранное"
          />
        </nav>
        <BookCount num="2" />
      </div>
    </div>
  );
}

export default Header;
