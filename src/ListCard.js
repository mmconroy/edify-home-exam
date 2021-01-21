import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function ListCard({ users }) {
  return (
    <div>
      <Card
        style={{
          padding: "1rem",
          margin: "1rem",
          height: "auto",
          minWidth: "300px",
          maxWidth: "400px",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <CardActionArea>
          <CardActions>
            <CardContent
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <div>
                {" "}
                <Avatar
                  src={users.avatar}
                  alt="Small Avatar"
                  style={{
                    width: "96px",
                    height: "96px",
                    margin: "1rem",
                  }}
                ></Avatar>
              </div>
              <div>
                {" "}
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{
                    width: "7rem",
                    margin: "1rem",
                  }}
                >
                  {users.firstName} {users.lastName}
                </Typography>
                <Link
                  to={`/users/${users.id}`}
                  style={{
                    width: "100%",
                    color: "black",
                    textDecoration: "none",
                    fontSize: "1rem",
                    border: "1px solid black",
                    padding: "6px",
                    margin: "1rem",
                  }}
                >
                  More Info
                </Link>
              </div>
            </CardContent>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ListCard;
