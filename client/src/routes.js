import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CarsPage } from "./pages/CarsPage";
import { ClientsPage } from "./pages/ClientsPage";
import { AuthPage } from "./pages/AuthPage";
import { AddPage } from "./pages/AddPage";
import { DetailsPage } from "./pages/DetailsPage";

import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import {CatalogPage} from "./pages/CatalogPage";
import { AddClientPage } from "./pages/AddClientPage";
import { ServiceAsksPage } from "./pages/ServiceAsksPage";
import { QuestionsPage } from "./pages/QuestionsPage";

export const useRouts = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/catalog" exact>
          <CatalogPage />
        </Route>
        <Route path="/catalog/:id">
          <CatalogPage />
        </Route>
        <Route path="/contacts" exact>
          <ContactsPage />
        </Route>
        <Route path="/adm/cars" exact>
          <CarsPage />
        </Route>
        <Route path="/adm/clients" exact>
          <ClientsPage />
        </Route>
        <Route path="/adm/service" exact>
          <ServiceAsksPage />
        </Route>
        <Route path="/adm/questions" exact>
          <QuestionsPage />
        </Route>
        <Route path="/adm/add" exact>
          <AddPage />
        </Route>
        <Route path="/adm/client/add" exact>
          <AddClientPage />
        </Route>
        <Route path="/adm/details/:id">
          <DetailsPage />
        </Route>
        <Redirect to="/adm/cars" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/catalog" exact>
        <CatalogPage />
      </Route>
      <Route path="/contacts" exact>
        <ContactsPage />
      </Route>
      <Route path="/adm/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
