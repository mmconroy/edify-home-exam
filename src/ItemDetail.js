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

  if (user.data) {
    content = (
      <div style={containerStyle}>
        <div>
          <img
            className="detail-image"
            src={user.data.avatar}
            alt="Avatar"
          ></img>
          <h1 className="detail-title">
            {user.data.firstName} {user.data.lastName}
          </h1>
        </div>
        <h4>{user.data.email}</h4>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default ItemDetail;
