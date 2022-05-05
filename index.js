const express = require("express");
const app = express();
const productsRouter = require("./routes/products");
// const isLogin = true;
const mongoose = require("mongoose");
require("dotenv").config;
const bodyParser=require("body-parser");

app.use(bodyParser.json);
const userName = "eren";
const password = "12345";
const dbName = "products";
//`mongodb+srv://${userName}:${password}@erendb.fr1eh.mongodb.net/${dbName}?retryWrites=true&w=majority`,
//`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@erendb.fr1eh.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,

mongoose.connect(
    `mongodb+srv://${userName}:${password}@erendb.fr1eh.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    (e) => {
        if (e) {
            console.log(e);
        } else {
            console.log("connected to database");
        }
    }
);


// app.use((req, res, next) => {
//     if (!isLogin) {
//         res.send("You must be logged in to view this page!")
//     } else {
//         next();
//     }
// });

app.use('/products', productsRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});


app.get('/', (req, res) => {

    res.send("Hello world!");
});