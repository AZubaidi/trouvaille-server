const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = [];

const saltRounds = 10; //10 is default salting by bcrypt. increase the number to see how longer it takes

//how jwt gets created and validated
//password encryption - bcrypt

// ## POST /api/register
// - Creates a new user.
// - Expected body: { username, password }
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Please enter the required fields.");
  }

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  // Create the new user
  const newUser = {
    username
    /* password, */
    password: hashedPassword,
  };

  // Insert it into our database
  try {
    await knex('users').insert(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).send("Failed registration");
  }
});
