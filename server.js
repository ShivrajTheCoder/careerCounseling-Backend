const express=require("express");
const app=express();
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const checkAdmin=require("./Middlewares/checkAdminAuth");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
const PORT=process.env.PORT || 8000; 
main().then(() => {
    console.log("Connected!!");
}).catch(err => {
    console.log(err)
});

async function main() {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}
// import routes
const authRoutes=require("./Routes/authRoutes");
const userRoutes=require("./Routes/userRoutes");
const adminRoutes=require("./Routes/adminRoutes");
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Middlewares
app.use(cors());

// Routes
app.use("/authentication",jsonParser,authRoutes);
app.use("/user",jsonParser,userRoutes);
app.use("/admin",jsonParser,checkAdmin,adminRoutes);
app.listen(PORT,()=>{
    console.log(`Listening on Port : ${PORT}`);
})