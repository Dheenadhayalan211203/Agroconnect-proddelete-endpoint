const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3000;
require("dotenv").config();


const MONGODB_URI="mongodb+srv://Dheena:dheena@cluster0.ser6ewc.mongodb.net/Agroconnect?retryWrites=true&w=majority&appName=Cluster0"

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model for user1 collection
const user1Schema = new mongoose.Schema({
  title: String,
  amount: Number
});

const User1 = mongoose.model("user1", user1Schema);

// Define schema and model for user2 collection
const user2Schema = new mongoose.Schema({
  title: String,
  amount: Number
});

const User2 = mongoose.model("user2", user2Schema);

//schema for adding the purchasing product

 
// Route to delete data from user1 collection
app.delete("/api/user1/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedData = await User1.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error('Error deleting product:', err); // Logging error for debugging
    res.status(500).json({ message: err.message });
  }
});

app.delete("/api/user2/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedData = await User2.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error('Error deleting product:', err); // Logging error for debugging
    res.status(500).json({ message: err.message });
  }
});

// Other routes and app configurations


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});