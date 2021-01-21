import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemDetail.css";
import axios from "axios";
import Media from "react-bootstrap/Media";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function ItemDetail() {
  //Changes the state of the url so that that when we click on a card, the data for the individual profile loads. It is what appends to the slug at the end of the URL
  const { id } = useParams();
  //This is the URL we will use to display a specific user based on their ID
  const url = `https://5f9a10979d94640016f705ed.mockapi.io/api/vi/users/${id}`;
  const [user, setUser] = useState({
    loading: false,
    data: null,
  });

  let content = null;

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "6rem",
    height: "auto",
  };
  useEffect(() => {
    setUser({
      loading: true,
      data: null,
    });
    axios
      .get(url)
      .then((response) => {
        setUser({ loading: false, data: response.data });
      })
      .catch(() => {
        setUser({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  //If there is an error retrieving data
  if (user.error) {
    content = <h1>There was an error loading data. Please try again.</h1>;
  }

  //While data is loading
  if (user.loading) {
    content = <h1>Loading. Please Wait.</h1>;
  }

  //What displays when we are successfully able to find the data
  if (user.data) {
    content = (
      <>
        <Media style={containerStyle}>
          <Jumbotron fluid>
            <Container>
              <h1>Employee Profile</h1>
            </Container>
          </Jumbotron>
          <div
            className="detail__wrapper"
            style={{
              display: "flex",
            }}
          >
            <div className="image__container">
              {" "}
              <img
                src={user.data.avatar}
                alt="Avatar"
                className="align-self-start mr-3"
                id="avatar"
              ></img>
            </div>
            <div className="text__container">
              {" "}
              <h5>
                {user.data.firstName} {user.data.lastName}
              </h5>
              <p>{user.data.job}</p>
              <p>{user.data.company}</p>
              <p>
                {user.data.city}, {user.data.state}
              </p>
              <p>{user.data.email}</p>
            </div>
          </div>
        </Media>
      </>
    );
  }

  return <div>{content}</div>; //can also add info for error or waiting states
}

export default ItemDetail;
