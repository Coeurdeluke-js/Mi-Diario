// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'tu_clave_secreta'; // ¡Cambia esto en producción!

app.use(cors());
app.use(bodyParser.json());

// Datos de ejemplo para usuarios y comentarios (deberías usar una base de datos)
const users = [];
const comments = [];

// Rutas de autenticación
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.json({ message: 'Usuario registrado correctamente.' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username: user.username }, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas.' });
    }
});

// Middleware de autenticación
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Rutas de comentarios
app.get('/api/comments/:entryId', (req, res) => {
    const entryId = req.params.entryId;
    const entryComments = comments.filter(c => c.entryId === entryId);
    res.json(entryComments);
});

app.post('/api/comments', authenticateToken, (req, res) => {
    const { entryId, content } = req.body;
    comments.push({ entryId, content, username: req.user.username });
    res.sendStatus(201);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});