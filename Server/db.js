var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
var nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
app.use("/public", express.static("public"));

app.use("/public", express.static(path.join(__dirname, "public")));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "services",
});

con.connect(function () {
  console.log("connected to the server!");
});

// Multer config for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./public/"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Route to add service
app.post("/api/addservice", upload.single("image"), (req, res) => {
  const { service_name, description, city, price } = req.body;
  const image = req.file?.filename;

  if (!image) {
    return res.status(400).json({ error: "Image file is required." });
  }

  const query = `
    INSERT INTO add_services (\`service-name\`, description, city, price, image)
    VALUES (?, ?, ?, ?, ?)
  `;

  con.query(
    query,
    [service_name, description, city, price, image],
    (err, result) => {
      if (err) {
        console.error("Insert error:", err);
        return res.status(500).json({ error: "Failed to insert service." });
      }
      res.status(200).json({ message: "Service added successfully." });
    }
  );
});

app.get("/api/getservices", (req, res) => {
  const sql = "SELECT * FROM add_services";
  con.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.send(result);
  });
});

app.post("/api/insert", (req, resp) => {
  var name = req.body.name;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var password = req.body.password;
  const query = "Insert into user(name,email,phone,password) values(?,?,?,?)";
  con.query(query, [name, email, mobile, password], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      return resp.status(500).json({ error: "Failed to register user" });
    }
    resp.status(200).json({ message: "User registered successfully" });
  });
});

app.post("/api/verify", (req, resp) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM user WHERE email = ? AND password = ?";
  con.query(query, [email, password], (err, result) => {
    if (err) {
      console.error("Login query error:", err);
      return resp.status(500).json({ message: "Server error" });
    }
    if (result.length > 0) {
      return resp.json(result);
    } else {
      return resp.json({ message: "wrong email id or password" });
    }
  });
});

app.get("/api/getservices", (req, res) => {
  const query = "SELECT * FROM add_services";
  con.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching services:", err);
      return res.status(500).json({ error: "Failed to fetch services" });
    }
    res.json(result);
  });
});

app.post("/api/booking", (req, resp) => {
  var sid = req.body.sid;
  var price = req.body.price;
  var userEmail = req.body.email;

  const query = "INSERT INTO booking_tbl(sid, price) VALUES (?, ?)";

  con.query(query, [sid, price], (err, result) => {
    if (err) {
      console.error("Error while inserting booking:", err);
      resp.json("");
    } else {
      console.log("Booking inserted:", result);

      const Smtp = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "mycity01012024@gmail.com",
          pass: "sywnhxhhcezzlmvj",
        },
      });

      const message = {
        from: "ITM SLS",
        to: "vanshpatel3220@gmail.com",
        subject: "Booking Confirmation",
        html: `
                    <p>Hello,</p>
                    <p>Your booking for Service ID <strong>${sid}</strong> has been confirmed.</p>
                    <p>Amount Paid: <strong>₹${price}</strong></p>
                    <p>Thank you for booking with us!</p>
                `,
      };

      Smtp.sendMail(message, (err, info) => {
        if (err) {
          console.error("Email sending error:", err);
          resp.json("");
        } else {
          console.log("Confirmation email sent:", info.response);
          resp.json("");
        }
      });
    }
  });
});

//for verify email registered!
app.post("/api/verifyemail", (req, resp) => {
  var email = req.body.email;
  const query = "select * from user where email=?";
  con.query(query, [email], (err, result) => {
    if (result.length > 0) {
      resp.send({ message: "email already registered!" });
    }
  });
});

app.listen(1520, () => console.log("Server running at http://localhost:1520"));
