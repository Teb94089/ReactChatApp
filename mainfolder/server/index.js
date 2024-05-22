const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require('./Routes/userRoute');


require("dotenv").config(); // invoke the config function

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users",userRoute);


app.get('/', (req, res) => {
    res.send("welcome to my app");
});

const port = process.env.PORT || 5000; // corrected PORT typo
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`);
});

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connection established"))
    .catch((error) => console.log("MongoDB connection failed: ", error.message));
