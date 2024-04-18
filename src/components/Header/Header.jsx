import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
import '../../index.css';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <nav>
            <ul className={css.nav}>
              <li>
                <NavLink className={css.item} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={css.item} to="/catalog">
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink className={css.item} to="/favorites">
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
