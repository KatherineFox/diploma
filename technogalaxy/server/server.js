import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import CableProducts from "../frontend/src/data/CableProducts.js";
import ComputerProducts from "../frontend/src/data/ComputerProducts.js";
import HeadphonesProducts from "../frontend/src/data/HeadphonesProducts.js";
import KeyboardProducts from "../frontend/src/data/KeyboardProducts.js";
import LaptopProducts from "../frontend/src/data/LaptopProducts.js";
import MonitorProducts from "../frontend/src/data/MonitorProducts.js";
import MouseProducts from "../frontend/src/data/MouseProducts.js";
import TabletProducts from "../frontend/src/data/TabletProducts.js";

dotenv.config();
connectDatabase();
const PORT = 5000;
const app = express();

//Завантажити продукти з серверу
app.get("/api/cable_products", (req, res) => {
  res.json(CableProducts);
});

app.get("/api/computer_products", (req, res) => {
  res.json(ComputerProducts);
});

app.get("/api/headphones_products", (req, res) => {
  res.json(HeadphonesProducts);
});

app.get("/api/keyboard_products", (req, res) => {
  res.json(KeyboardProducts);
});

app.get("/api/laptop_products", (req, res) => {
  res.json(LaptopProducts);
});

app.get("/api/monitor_products", (req, res) => {
  res.json(MonitorProducts);
});

app.get("/api/mouse_products", (req, res) => {
  res.json(MouseProducts);
});

app.get("/api/tablet_products", (req, res) => {
  res.json(TabletProducts);
});

app.get("/", (req, res) => {
  res.send("QWERTY");
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT} `);
});
