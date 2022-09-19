import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user";
import middleware from "./Midleware/middleware";

const port = 8000;
app.use(express.json());
dotenv.config();

 app.use("/users", middleware, userRoute);

    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });













