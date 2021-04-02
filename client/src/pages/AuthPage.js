import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';
import { authData, paths } from '../enum';
import { authorize } from '../services/httpService';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, clearError } = useHttp();
  const [ form, setForm ] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [ clearError, error, message ]);

  const changeHandler = (event) => {
    setForm({ ...form, [ event.target.name ]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const { data } = await authorize(paths.Register, form);

      message(data.message);
    } catch (e) {
      message(e.message);
    }
  };

  const loginHandler = async () => {
    try {
      const { data } = await authorize(paths.Login, form);
      
      auth.login(data.token, data.userId);
    } catch (e) {
      message(e.message);
    }
  };

  return (
    <div className="row auth-container">
      <h1>{t('Calories counter')}</h1>
      <div className="card purple darken-1">
        <div className="card-content white-text">
          <span className="card-title">{t('Authorization')}</span>
          <div className="input-field">
            <input
              placeholder={t('Enter email')}
              id="email"
              type="text"
              name="email"
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div className="input-field">
            <input
              placeholder={t('Enter password')}
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="card-action">
          <button
            className="btn yellow darken-3 mr-10"
            disabled={loading}
            onClick={loginHandler}
          >
            {t('Login')}
          </button>
          <button
            className="btn grey lighten-1 black-text"
            onClick={registerHandler}
            disabled={loading}
          >
            {t('Sign in')}
          </button>
        </div>
      </div>
    </div>
  );
};

