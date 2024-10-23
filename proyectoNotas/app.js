const express = require("express");

const holaRoutes = require("./routes/holaMundo");

const app = express();
const port = 3006;

app.set("port", port);

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.use("/api", holaRoutes);

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});
