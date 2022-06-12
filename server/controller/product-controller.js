import pool from "../database/db.js";

export const getProducts = (request, response) => {
  const query = "select * from products";
  pool.query(query, (error, result) => {
    if (error)
      return response.status(401).send({ message: error, success: false });
    result = JSON.parse(JSON.stringify(result));
    response.status(201).send({
      success: true,
      message: "get products successful",
      products: result,
    });
  });
};
export const getProductById = (request, response) => {
  const query = "select * from products where id = ?";
  const id = request.params.id;
  console.log(id);
  pool.query(query, id, (error, result) => {
    if (error)
      return response.status(401).send({ message: error, success: false });
    result = JSON.parse(JSON.stringify(result));
    response.status(201).send({
      success: true,
      message: "get product by id success",
      products: result,
    });
  });
};

// Product Name
// MRP
// Selling Price (if any, mrp and selling price are present)
// Image upload section, (use multer or any other image upload library)
// Brand/Company name
// Quantity
// Category (there should be a dropdown option to select, which has all the categories added above in STEP-B (if there are no categories, add a default “uncategorized” category)
// Product Description

export const insertProduct = (request, response) => {
  const query =
    "insert into products (name, mrp, sellingPrice, url, brand, quantity, category, description) values (?,?,?,?,?,?,?,?)";
  console.log(query);
  const name = request.body.name;
  const mrp = request.body.mrp;
  const sellingPrice = request.body.sellingPrice;
  const url = request.body.url;
  const brand = request.body.brand;
  const quantity = request.body.quantity;
  const category = request.body.category;
  const description = request.body.description;

  pool.query(
    query,
    [name, mrp, sellingPrice, url, brand, quantity, category, description],
    (error, result) => {
      if (error)
        return response.status(401).send({ message: error, success: false });
      result = JSON.parse(JSON.stringify(result));
      console.log(result);
      response.status(201).send({
        success: true,
        message: "product added successfully",
        products: result,
      });
    }
  );
};
