import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import 'materialize-css';
import { setLangCode } from './http/LocalStorageService';
import { translations } from './http/LocalizationService';

const App = () => {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  if (!ready) {
    return <Loader />;
  }

  const changeHandler = (event) => {
    const langCode = event.target.value;
    window.changeLanguage(langCode);
    setLangCode(langCode);
    forceUpdate();
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        <div className="input-field col s12 localeSelector">
          <select className="browser-default" onChange={changeHandler}>
            {Object.keys(translations).map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
