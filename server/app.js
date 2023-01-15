const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server is runningt at port: ${PORT}`.blue));
