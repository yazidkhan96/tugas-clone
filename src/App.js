import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Kelas from "./KelasPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/kelas" exact component={Kelas} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
