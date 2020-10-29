import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import List from "./List";
import ItemDetail from "./ItemDetail";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://5f9a10979d94640016f705ed.mockapi.io/api/vi/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <List users={users} />
        </Route>
        <Route path="/users/:id">
          <ItemDetail users={users} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
