import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HistoryPage } from './pages/HistoryPage';
import { AddCaloriesPage } from './pages/AddCaloriesPage';
import { ProfilePage } from './pages/ProfilePage';
import { AuthPage } from './pages/AuthPage';
import { paths } from './enum';
import { AuthContext } from './context/AuthContext';

export const useRoutes = (isAuthenticated) => {
  return (
    <AuthContext.Consumer>
      {({ token, userId }) =>
        isAuthenticated ? (
          <Switch>
            <Route path={paths.Profile} exact>
              <ProfilePage token={token} userId={userId} />
            </Route>
            <Route path={paths.History} exact>
              <HistoryPage token={token} />
            </Route>
            <Route path={paths.AddCalories} exact>
              <AddCaloriesPage token={token} />
            </Route>
            <Redirect to={paths.Profile} />
          </Switch>
        ) : (
          <Switch>
            <Route path={paths.Auth} exact>
              <AuthPage />
            </Route>
            <Redirect to={paths.Auth} />
          </Switch>
        )
      }
    </AuthContext.Consumer>
  );
};
