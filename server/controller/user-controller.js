import pool from "../database/db.js";

export const userLogIn = (request, response) => {
  const username = request.body.email;
  const password = request.body.password;
  const query = "select * from users where email = ? and password = ?";
  pool.query(query, [username, password], (error, result) => {
    if (error)
      return response.status(401).send({ message: error, success: false });
    result = JSON.parse(JSON.stringify(result));
    console.log(result);
    if (result.length == 0)
      return response
        .status(401)
        .send({ message: "User does not exist", success: false });
    response.status(201).send({
      success: true,
      message: "login successful",
    });
  });
};

export const userSignUp = (request, response) => {
  const username = request.body.username;
  const email = request.body.email;
  const password = request.body.password;
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const phone = request.body.phone;
  pool.query(
    "select * from users where username = ? or email = ? or phone = ?",
    [username, email, phone],
    (error, result) => {
      if (error) return response.status(401).send({ message: error });
      result = JSON.parse(JSON.stringify(result));
      if (result.length === 1)
        return response.status(401).send({
          success: false,
          message: "user already exists",
        });
      pool.query(
        "Insert into users (username, email,password, firstname,lastname,phone) values (?,?,?,?,?,?)",
        [username, email, password, firstname, lastname, phone],
        (error, result) => {
          if (error) return response.status(401).send({ message: error });

          response.status(201).send({
            success: true,
            message: "Acount created successfully",
          });
        }
      );
    }
  );
};
