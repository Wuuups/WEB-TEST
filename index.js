// import express from "express"
const express = require("express")
const { request } = require("http")
// import { resolve } from "path"
const path = require("path")

const filePath = path.resolve(__dirname)
// console.log(filePath);

const app = express()
app.use(express.static(path.resolve(filePath, "public")))
app.use('/bootstrap', express.static(path.resolve(filePath, 'node_modules/bootstrap/dist'))); //路徑映射
app.use('/fontawesome', express.static(path.resolve(filePath, 'node_modules/@fortawesome/fontawesome-free')));
app.use('/jquery', express.static(path.resolve(filePath, 'node_modules/jquery/dist')));

app.get("/", (req, res) => {

   // console.log(error)

   res.send("Home page")
})

app.listen(3000, () => {
   console.log("server is running at http://localhost:3000")
})