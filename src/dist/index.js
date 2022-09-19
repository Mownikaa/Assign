"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_1 = require("./routes/user");
var middleware_1 = require("./Midleware/middleware");
var port = 8000;
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use("/users", middleware_1["default"], user_1["default"]);
app.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});

//# sourceMappingURL=index.js.map
