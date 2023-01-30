const express = require("express");
const app = express();
const mainRouter = require("./route/routes");

app.use("/", mainRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
