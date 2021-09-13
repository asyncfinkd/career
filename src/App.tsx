import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import { ApplicationContext } from "./context/ApplicationContext";
import env from "./application/environment/env.json";
import { Routes } from "./app/routes/Routes";

type T = any;

const App: React.FC = () => {
  const [jobs, setJobs] = React.useState<Array<T> | null>([]);
  React.useEffect(() => {
    axios.post(`${env.host}/api/getalljob`).then((res) => {
      setJobs(res.data.data);
    });
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
    </>
  );
};

export default App;
