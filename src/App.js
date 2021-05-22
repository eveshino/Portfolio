import HomePage from "./pages/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route>
        <HomePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
