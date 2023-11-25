// ## POST /api/users/login
// -   Generates and responds a JWT for the user to use for future authorization.
// -   Expected body: { email, password }
// -   Response format: { token: "JWT_TOKEN_HERE" }
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Please enter the required fields");
  }

  // Find the user
  const user = await knex('users').where({ username: username }).first();
  if (!user) {
      return res.status(400).send("Invalid username");
  }

  // Validate the password
 const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid password");
  } 

  // Generate a token
  const token = jwt.sign(
    { id: "user.id", username: user.username },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );
  res.json({ token });
});
