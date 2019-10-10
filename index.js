const app = require("express")();
const consign = require("consign");

consign()
    .include("./src/routes.js")
    .then("./src/config/middlewares.js")
    .into(app)


app.listen(8080, () => {
    console.log("running");
})