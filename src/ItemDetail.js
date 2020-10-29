import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemDetail() {
  const { id } = useParams();
  const url = `https://5f9a10979d94640016f705ed.mockapi.io/api/vi/users/${id}`;
  const [user, setUser] = useState({});
  let content = null;
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem",
    height: "auto",
  };
  useEffect(() => {
    setUser({ data: null });
    axios
      .get(url)
      .then((response) => {
        setUser({ data: response.data });
      })
      .catch(() => {
        setUser({ data: null });
      });
  }, [url]);

  setTimeout(() => {
    console.log("go_to_sleep");
  }, 5000);

  if (user.data) {
    content = (
      <div style={containerStyle}>
        <img
          src={user.data.avatar}
          alt="Avatar"
          style={{ border: "1px solid black" }}
        ></img>
        <h1>
          {user.data.firstName} {user.data.lastName}
        </h1>
        <h3>{user.data.company}</h3>
        <p>
          {user.data.city}, {user.data.state}
        </p>
        <h3>{user.data.job}</h3>
        <h4>{user.data.email}</h4>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ItemDetail;
