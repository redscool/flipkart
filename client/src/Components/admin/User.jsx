import React from "react";
import { useState } from "react";
import styles from "../../styles/admin.Module.css";

const User = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className={styles.mainCtn}>
      <h1>Edit User Details</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        placeholder="Enter the name"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        placeholder="Enter the password"
      />
      <div className={styles.save}>
        <p>Save</p>
      </div>
    </div>
  );
};

export default User;
