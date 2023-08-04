const express= require("express");
const mysql=require("mysql2");
const cors =require("cors");
const cookieParser = require("cookie-parser"); 
const app=express();
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"lovelygirl12",
    database:"website"
})
// In-memory session storage (for demonstration purposes)
const sessions = {};

// Middleware to check if the user has a valid session
const validateSession = (req, res, next) => {
  const sessionId = req.cookies.sessionId;
  const session = sessions[sessionId];
  console.log(req.cookies);
  if (session && session.authenticated) {
    req.user = session.user;
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

app.post("/SignIn", (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  const values = [req.body.email,req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.json("Sign in failed");
    }
     if (data.length === 0) {
       console.log("Sign in failed");
       return res.json("Sign in failed");
     } else {
        const user = { email: data[0].email , firstname:data[0].firstname,lastname:data[0].lastname};
        const sessionId = Math.random().toString(36).substring(2, 15);
        sessions[sessionId] = { authenticated: true, user: user };
        res.cookie("sessionId", sessionId, { httpOnly: true });
        //  console.log("Response Headers:", res.getHeaders());
        return res.json({ message: "Sign in successful!", sessionId: sessionId });
        }
    })
});

app.get("/logout", (req, res) => {
  const sessionId = req.cookies.sessionId;
  delete sessions[sessionId];
  res.clearCookie("sessionId");
  res.send("Logged out successfully.");
});

app.get("/profile", validateSession, (req, res) => {
  const { email } = req.user;
  res.send(req.user);
});

app.post("/SignUp", (req, res) => {
  const sql = "INSERT INTO user (`firstname`,`lastname`,`birthdate`,`email`,`password`) VALUES (?)";
  const values = [req.body.firstname,req.body.lastname,req.body.birthdate,req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (data.length === 0) {
      console.log("Sign up failed");
      return res.json("Sign up failed");
    } else {
      console.log("Sign up successful!");
      return res.json(data);
    }
  });
});

app.listen(3001,()=>{
    console.log(`listening on port 3001`);
})