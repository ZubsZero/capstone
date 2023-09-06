const { express, routes } = require("./controller/control");
const errorHandling = require("./middleware/ErrorHandling");

const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = +process.env.port || 3001

// cors access
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

app.use(
  express.static("./static"),
  express.urlencoded({
    extended: false,
  }),
  cookieParser(),
  cors(),
  routes,
  errorHandling
);
// direct to home page with routes descriptions
routes.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

// set server
app.listen(port, () => {
  console.log(
    `WatchTimes server running on port ${port}`
  );
});