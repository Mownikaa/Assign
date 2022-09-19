import express from "express";

import userRoute from "./routes/user";
import middleware from "./Midleware/middleware";

const port = 8000;
const app = express();
app.use(express.json());

 app.use("/users", middleware, userRoute);

    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });













