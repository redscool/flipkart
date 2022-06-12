import React, { useState } from "react";
import styles from "../styles/admin.Module.css";
import User from "../Components/admin/User";
import Addproduct from "../Components/admin/Addproduct";
import Addcategory from "../Components/admin/Addcategory";

const Admin = () => {
  const [editable, seteditable] = useState(false);
  return (
    <div>
      <div className={styles.buttons}>
        <div
          className={styles.edit}
          onClick={(e) => {
            if (editable === "edit") seteditable(false);
            else seteditable("edit");
          }}
        >
          <p>Edit user</p>
        </div>
        <div
          className={styles.addCat}
          onClick={(e) => {
            if (editable === "addCat") seteditable(false);
            else seteditable("addCat");
          }}
        >
          <p>Add category</p>
        </div>
        <div
          className={styles.addProduct}
          onClick={(e) => {
            if (editable === "addProduct") seteditable(false);
            else seteditable("addProduct");
          }}
        >
          <p>Add Product</p>
        </div>
      </div>
      {editable === "edit" ? <User /> : null}
      {editable === "addProduct" ? <Addproduct /> : null}
      {editable === "addCat" ? <Addcategory /> : null}
    </div>
  );
};

export default Admin;
