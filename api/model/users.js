const db = require("../config/db");
const { createToken } = require("../middleware/AuthenticateUser");
const bcrypt = require('bcrypt');
const {hash ,compare ,hashSync} = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');


class Users {
  fetchUsers(req, res) {
    const query = `SELECT UserID, FirstName, LastName, email, UserPwd, UserName, UserRole FROM Users;`;

    db.query(query, (err, results) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchUser(req, res) {
    const query = `SELECT UserID, FirstName, LastName, email, UserPwd FROM Users WHERE UserID = ${req.params.id};`;

    db.query(query, (err, result) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
 
  async register(req, res) {
    const data = req.body;
  
    try {
      const saltRounds = 15;
      const hashedPassword = await bcrypt.hash(data.UserPwd, saltRounds);
  
      const user = {
        FirstName: data.FirstName,
        LastName: data.LastName,
        UserName: data.UserName,
        email: data.email,
        UserPwd: hashedPassword
      };
  
      const query = 'INSERT INTO Users SET ?';
      db.query(query, user, (err) => {
        if (err) {
          console.error('Error inserting user:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          const token = jwt.sign(
            { UserID: user.UserID, email: user.email },
            process.env.secret_key, 
            {
              expiresIn: '1h',
            }
          );
  
          res.cookie('AuthorizedUser', token, {
            maxAge: 3600000,
            httpOnly: true,
          });
  
          res.status(201).json({
            status: res.statusCode,
            message: 'New user registered!',
          });
        }
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
   async login(req,res){
    const {email, UserPwd} =
    req.body
    const query =
    `
    SELECT Firstname , Lastname, UserRole , email , UserPwd FROM Users
    WHERE email = '${email}';
    `
    db.query(query,async(err, results)=>{
        if(err) throw err
        if(!results?.length){
            res.json({
                status:res.statusCode,
                msg : "You provided a wrong email."
            })
        }else{
            await compare(UserPwd, results[0].UserPwd,(cErr,cResults)=>{
                if(cErr) throw cErr
                // Create a token
                const token = createToken({
                    email, UserPwd
                })
                if(cResults){
                    res.json({
                        msg: "Welcome to Watchtime",
                        token,
                        results: results[0]
                    })
                }else{
                    res.json({
                        status: res.statusCode,
                        msg: "Invalid password or you have not registered"
                    })
                }
            })
        }
    })
}
  
  async updateUser(req, res) {
    const query = `UPDATE Users SET ? WHERE UserID = ?`;
    const userId = req.params.id;
    const userData = req.body;
  
    try {
      if (userData.UserPwd) {
        userData.UserPwd = await bcrypt.hash(userData.UserPwd, 15);
      }
  
      for (const key in userData) {
        if (userData[key] === undefined) {
          delete userData[key];
        }
      }
  
      db.query(query, [userData, userId], (err) => {
        if (err) {
          console.error('Error updating user details:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.json({
            status: res.statusCode,
            message: 'User details updated!',
          });
        }
      });
    } catch (error) {
      console.error('Error updating user details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  
 
  

  
  deleteUser(req, res) {
    const query = `DELETE FROM Users WHERE UserID = ${req.params.id};`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "User deleted!",
      });
    });
  }
}

module.exports = Users;
