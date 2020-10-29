import React from "react";
import ListCard from "./ListCard";

function List({ users }) {
  return (
    <div>
      {users.map((user) => (
        <ListCard key={user.id} users={user}></ListCard>
      ))}
    </div>
  );
}

export default List;
