const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const fetch = require('node-fetch');
const axios = require('axios');
const bodyParser = require("body-parser");
const { parseString } = require("xml2js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 3000));

app.get('/fetchCatFactsAndPics', (req, res) => {
    axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=25')
        .then(response => {
            parseString(response.data, (error, result) => {
                const catPics = result.response.data[0].images[0].image;
                axios.get('https://catfact.ninja/facts?limit=25')
                    .then(response => {
                        const catFacts = response.data.data;
                        const catPicsAndFacts = catPics.reduce((catPicsAndFacts, image, index) => {
                            catPicsAndFacts.push({
                                url: image.url[0],
                                fact: catFacts[index].fact
                            });
                            return catPicsAndFacts;
                        }, []);
                        res.send(catPicsAndFacts);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });

        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});