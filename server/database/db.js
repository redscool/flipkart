import mysql from "mysql";

// mongodb clould connection for database, thos function takes the username and password from the dot env file
const pool = mysql.createPool({
  host: "sql6.freemysqlhosting.net",
  user: "sql6499076",
  password: "uDSmRgKWEs",
  database: "sql6499076",
});
export default pool;
