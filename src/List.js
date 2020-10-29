import React from "react";
import ListCard from "./ListCard";
import "./List.css";

function List({ users }) {
  return (
    <div className="list__container">
      {users.map((user) => (
        <ListCard key={user.id} users={user}></ListCard>
      ))}
    </div>
  );
}

export default List;
