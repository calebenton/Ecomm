const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());

const db = require('./models')

// Routers
const itemsRouter = require('./routes/Items')
app.use("/items", itemsRouter);

const UsersRouter = require('./routes/Users')
app.use("/auth", UsersRouter);

db.sequelize.sync().then(() => {
app.listen(3002, () => {
    console.log("Server Running on port 3002");
    });
});


