import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPages from "./pages/index/indexPages";
import axios from "axios";
import { ApplicationContext } from "./application/context/ApplicationContext";
import env from "./application/environment/env.json";
import JobPages from "./pages/job/jobPages";

const App: React.FC = () => {
  const [jobs, setJobs] = React.useState([]);
  React.useEffect(() => {
    axios.post(`${env.host}/api/getalljob`).then((res) => {
      setJobs(res.data.data);
    })
  }, [])
  return(
    <>
      <ApplicationContext.Provider value={{jobs}}>
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={IndexPages} />
        <Route path="/job/:id" exact component={JobPages} />
        </Switch>
      </BrowserRouter>
      </ApplicationContext.Provider>
    </>
  )
}

export default App;