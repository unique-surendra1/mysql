import React, { useState } from "react";
import User from "./User/User";

const Users = ({ data }) => {
  const [userdata, setUserData] = useState(data);
  console.log(data, "Data");
  console.log(userdata, "userData");

  return (
    <section>
      {data.map((item) => {
        return <User key={item.id} data={data} />;
      })}
    </section>
  );
};

export default Users;
