import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

// a

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP RUN SERVER");
});
