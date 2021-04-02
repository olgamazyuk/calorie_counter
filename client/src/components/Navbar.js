import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { paths } from '../enum';
import { t } from '../http/LocalizationService';

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push(paths.Auth);
  };

  return (
    <nav>
      <div className="nav-wrapper orange lighten-1 navbar-container">
        <span className="brand-logo">{t('Calories counter')}</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to={paths.Profile}>{t('User account')}</NavLink>
          </li>
          <li>
            <NavLink to={paths.AddCalories}>{t('Add calories')}</NavLink>
          </li>
          <li>
            <NavLink to={paths.History}>{t('History')}</NavLink>
          </li>
          <li>
            <a href={paths.Auth} onClick={logoutHandler}>
              {t('Logout')}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
