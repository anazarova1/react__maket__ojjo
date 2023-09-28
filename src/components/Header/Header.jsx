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
              <NavLink to="/">Home</NavLink>
              <NavLink to="/catalog">Catalog</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </nav>
            <div className={styles.logo}>
              <img src={Logo} />
            </div>
            <nav>
              <img src={ Search }/>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
