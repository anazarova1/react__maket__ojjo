import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../assets/Logo.png"
import Search from "../../assets/search.svg"
export const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className={styles.navigate}>
            <nav>
              <NavLink to="/">Главная</NavLink>
              <NavLink to="/catalog">Каталог</NavLink>
              <NavLink to="/contacts">Контакты</NavLink>
            </nav>
            <div className={styles.logo}>
              <img src={Logo} />
            </div>
            <nav className={styles.navigate}>
              <img src={Search} />
              <NavLink to="/catalog">Поиск</NavLink>
              <div className={styles.header_btn}>
                <button>Вход</button>
                <button>Регистрация</button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
