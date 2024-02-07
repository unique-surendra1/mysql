import React, { useState } from "react";
import User from "./User/User";

const Users = ({ data }) => {
  const [userdata, setUserData] = useState(data);
  console.log(data, "Data");
  console.log(userdata, "userData");

  return (
    <section>
      {userdata.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.firstName}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Users;
