const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const fetch = require('node-fetch');
const axios = require('axios');
const bodyParser = require("body-parser");
const {parseString} = require("xml2js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, '/dist')));


app.get('/fetchCatPics', (req, res) => {
    /*
    const options = {
        headers: {
            'Authorization': `Token ${serverToken}`,
            'Accept-Language': 'en_US',
            'Content-Type': 'application/json'
        }
    };
    const userLocation = req.body.userCoordinates;
    const toLocation = req.body.toCoordinates;
    */
    axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=25')
        .then(response => {
            parseString(response.data,(error,result) => {
                res.send(result.response.data);
            });
            
        })
        .catch(error => {
            console.log(error);
        });
});

app.get('/fetchCatFacts', (req, res) => {
    axios.get('https://catfact.ninja/facts?limit=25')
        .then(response => {
            res.send(response.data.data);
        })
        .catch(error => {
            console.log(error);
        });
});
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});