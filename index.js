const bodyParser = require('body-parser');
const express = require('express')
const PORT = 3000;

const app = express();
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const logRequest = (method, req, res) => {
    console.log('---------------------------------------------------------')
    console.log('REQUEST: ' + method)
    console.log('HEADERS:')
    console.log(req.headers)
    console.log('')
    console.log('BODY:')
    console.log(req.body)
    res.sendStatus(200);
}

app.get('', (req, res) => logRequest('GET', req, res))
app.post('', (req, res) => logRequest('POST', req, res))
app.put('', (req, res) => logRequest('PUT', req, res))
app.delete('', (req, res) => logRequest('DELETE', req, res))
app.patch('', (req, res) => logRequest('PATCH', req, res))

app.listen(PORT, () => console.log('listening to port ' + PORT));