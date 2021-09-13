import React from "react";
import axios from "axios";
import env from "./application/environment/env.json";
import { ApplicationContext } from "./application/context/ApplicationContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPages from "./pages/index/indexPages";
import JobPages from "./pages/job/jobPages";

export default function App() {
  const [jobs, setJobs] = React.useState([]);
  axios.post(`${env.host}/api/getalljob`).then((res) => {
    setJobs(res.data.data);
  }, []);
  return (
    <>
      <ApplicationContext.Provider value={{ jobs }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPages} />
            <Route path="/job/:id" exact component={JobPages} />
          </Switch>
        </BrowserRouter>
      </ApplicationContext.Provider>
    </>
  );
}
