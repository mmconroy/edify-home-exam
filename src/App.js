import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import ItemDetail from "./ItemDetail";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://5f9a10979d94640016f705ed.mockapi.io/api/vi/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios(
        `https://5f9a10979d94640016f705ed.mockapi.io/api/vi/users?search=${query}`
      );
      setUsers(result.data);
    };

    fetchUsers();
  }, [query]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <Switch>
          <Route exact path="/">
            <List users={users} />
          </Route>
          <Route path="/users/:id">
            <ItemDetail users={users} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
