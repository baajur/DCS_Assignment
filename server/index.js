const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});