import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Contact from "./pages/Contact";
import Aboutme from "./pages/Aboutme";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
