import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function ListCard({ users }) {
  return (
    <div>
      <Card
        style={{
          margin: "2rem",
          height: "auto",
          width: "300px",
        }}
      >
        <CardActionArea>
          <CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {users.firstName} {users.lastName}
              </Typography>
              <img src={users.avatar} alt="Small Avatar"></img>
            </CardContent>
          </CardActions>
          <Link
            to={`/users/${users.id}`}
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            More Info
          </Link>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ListCard;
