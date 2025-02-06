import express from "express";
import rootRouter from "./src/routes/root.router.js";

const app = express();

app.use(rootRouter);

app.listen(3069, () => {
  console.log(`Server Online At Port 3069`);
});
