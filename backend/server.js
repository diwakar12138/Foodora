const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const foodRoutes = require("./routes/foodRoutes");



dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());




// Routes
app.use("/api/auth", authRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/foods", foodRoutes);



mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/",(req,res)=>{

res.send("Food Delivery API Running");

});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{

console.log(`Server running on ${PORT}`);

});