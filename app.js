const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();

app.use(bodyParser.json);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'PracticaMIA'
});

connection.connect(error => {
    if(error) throw error;
    console.log('Database Funciona');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
