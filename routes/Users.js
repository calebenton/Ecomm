const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt")
const {validateToken} = require('../middlewares/AuthMiddleware')

const {sign} = require('jsonwebtoken')


router.post("/", async (req, res) => {
    const { userName, password, isAdmin } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            userName: userName,
            password: hash,
            isAdmin: isAdmin,
        })
        res.json("SUCCESS!")
    })
})

router.post("/login", async (req, res) => {
        const { userName, password } = req.body;
      
        const user = await Users.findOne({ where: { userName: userName } });
      
        if (!user) {
            res.json({ error: "User Doesn't Exist" });
          }else {
               bcrypt.compare(password, user.password).then((match) => {
                  if (!match) {
                      res.json({ error: "Wrong Username And Password Combination" });
                  } else {
                    const accessToken = sign(
                        {userName: user.userName, id: user.id},
                        "importantsecret" )
                      res.json(accessToken);  
                        if (user.isAdmin == 1){
                            console.log("User is an Admin")
                        } else {
                            console.log("User is not an Admin")
                      }
                  }
              }); 
          }
      });


router.get('/auth', validateToken, (req, res) => {
    res.json(req.user)
})


module.exports = router;