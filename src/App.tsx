import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import { ApplicationContext } from "./context/ApplicationContext";
import env from "./application/environment/env.json";
import { Routes } from "./app/routes/Routes";
import Modal from "./components/modal/Modal";

type T = any;

const App: React.FC = () => {
  const [jobs, setJobs] = React.useState<Array<T> | null>([]);
  React.useEffect(() => {
    async function fetchAPI() {
      try {
        await axios.post(`${env.host}/api/getalljob`).then((res) => {
          setJobs(res.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    }

    fetchAPI();
  }, []);
  return (
    <>
      <ApplicationContext.Provider value={{ jobs }}>
        <BrowserRouter>
          <Switch>
            {Routes.map((routes) => {
              return (
                <Route path={routes.path} exact component={routes.component} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </ApplicationContext.Provider>
      <Modal />
    </>
  );
};

export default App;
