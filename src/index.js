import express from "express";

const app = express();
const PORT = 5000;

app.get("/test", (req, res) => {
  res.status(200).send("Running!!!");
});
app.listen(PORT, () => {
  console.log(`Server running on PORT#${PORT}`);
});
