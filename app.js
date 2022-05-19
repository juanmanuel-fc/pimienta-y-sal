const express = require("express");
const app = express();
const expressPort = 5000;

app.listen(expressPort, () => {
	console.log("Express running OK on port", expressPort);
});

const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
