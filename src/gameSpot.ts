import express from "express";
import { join } from "path";

const app = express();

import { logging } from "./middlewares/logging.middleware";
import { createLocals } from "./middlewares/locals.middleware";
import { createManageErrors } from "./middlewares/errors.middleware";

import games from "./models/games.json";
import router from "./routes/routes";

app.set("views", join(__dirname.replace(/\\dist$/, ""), "views"));
app.set("view engine", "ejs");
app.use(express.static(join(__dirname.replace(/\\dist$/, ""), "public")));
app.use(logging);

const locals = createLocals(app, games);
app.use(locals);
app.use(router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const manageErrors = createManageErrors(app);
app.use(manageErrors);
