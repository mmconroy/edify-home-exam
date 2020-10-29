import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function ListCard({ users }) {
  return (
    <div>
      <Card
        style={{
          margin: "3rem",
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
              <Typography variant="body1" color="textSecondary" component="p">
                {users.company}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                style={{ marginBottom: "16px" }}
              >
                {users.jobTitle}
              </Typography>
              <img src={users.avatar}></img>
            </CardContent>
          </CardActions>
          <Link to={`/users/${users.id}`}>
            <Button>More Info</Button>
          </Link>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ListCard;
