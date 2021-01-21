import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import ItemDetail from "./ItemDetail";

function App() {
  //For Search, filled with data from API when we search
  const [users, setUsers] = useState([]);
  //Takes what is typed in the search bar and adds it to the query
  const [query, setQuery] = useState("");
  //To change state in the value of the input box
  const [text, setText] = useState("");
  //Allows us to know if data is being fetched, will go to false (line 25 after data is loaded)
  const [isLoading, setIsLoading] = useState(true);

  //Populates our list with all the user data. This is our HTTP request
  useEffect(() => {
    fetch("https://5f9a10979d94640016f705ed.mockapi.io/api/vi/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    setIsLoading(false);
  }, []);

  //Fetch data when search query starts, when you actually start typing something in the search box
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
        <Switch>
          <Route exact path="/">
            <Search
              getQuery={(q) => setQuery(q)}
              text={text}
              setText={setText}
            />
            <List users={users} isLoading={isLoading} />
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
