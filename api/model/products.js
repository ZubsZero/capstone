const db = require("../config/db");

class Products {
  fetchProducts(req, res) {
    const query = `SELECT ProdID, ProdName, Price, quantity, ProdUrl, Brand, category FROM Products;`;

    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing database query:', err);
        return res.status(500).json({ error: 'An error occurred while fetching products' });
      }

      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchProduct(req, res) {
    const productId = req.params.id;
    const query = `SELECT ProdID, ProdName, Price, quantity, ProdUrl, Brand, category FROM Products WHERE ProdID = ?;`;

    db.query(query, [productId], (err, result) => {
      if (err) {
        console.error('Error executing database query:', err);
        return res.status(500).json({ error: 'An error occurred while fetching the product' });
      }

      if (result.length === 0) {
        return res.status(404).json({
          status: res.statusCode,
          message: 'Product not found',
        });
      }

      res.json({
        status: res.statusCode,
        result: result[0],
      });
    });
  }

  addProduct(req, res) {
    const query = `INSERT INTO Products SET ?;`;

    db.query(query, req.body, (err) => {
      if (err) {
        console.error('Error executing database query:', err);
        return res.status(500).json({ error: 'An error occurred while adding the product' });
      }

      res.json({
        status: res.statusCode,
        message: "Your Wrist Watch has been added!",
      });
    });
  }

  updateProduct(req, res) {
    const productId = req.params.id;
    const query = `UPDATE Products SET ? WHERE ProdID = ?;`;

    db.query(query, [req.body, productId], (err) => {
      if (err) {
        console.error('Error executing database query:', err);
        return res.status(500).json({ error: 'An error occurred while updating the product' });
      }

      res.json({
        status: res.statusCode,
        message: "Wrist watch details updated!",
      });
    });
  }

  deleteProduct(req, res) {
    const productId = req.params.id;
    const query = `DELETE FROM Products WHERE ProdID = ?;`;

    db.query(query, [productId], (err) => {
      if (err) {
        console.error('Error executing database query:', err);
        return res.status(500).json({ error: 'An error occurred while deleting the product' });
      }

      res.json({
        status: res.statusCode,
        message: "Watch removed!",
      });
    });
  }
}

module.exports = Products;
