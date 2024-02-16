import mysql from "mysql";

const dbConnection = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "merndb",
    port: 3306,
  });

  connection.connect(function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("MYSQL Database connected successfully....");
    }
  });
  return connection;
};

export default dbConnection;
