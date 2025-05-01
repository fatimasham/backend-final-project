const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ToDoRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT ${PORT}`)
})



//fffatisha8900
//sXKbb6GsUoMtFyGf

//mongodb+srv://fffatisha8900:<db_password>@cluster1.4oj8n3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1