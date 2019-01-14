const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const fetch = require('node-fetch');
const axios = require('axios');
const bodyParser = require("body-parser");
const jsStringEscape = require('js-string-escape')
const openBrowser = require('react-dev-utils/openBrowser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
if (openBrowser('http://localhost:8080')) {
    console.log('The browser tab has been opened!');
}
/*
    I combinded both API calls into one.
    Need to add better error handling, as well
    as apbility to add params to support infinte scrolling
    in future
*/
app.get('/fetchCatFactsAndPics', (req, res) => {
    axios.get('http://thecatapi.com/api/images/get?format=json&results_per_page=25')
        .then(response => {
            const catPics = response.data;
            axios.get('https://catfact.ninja/facts?limit=25')
                .then(response => {
                    const catFacts = response.data.data;
                    const catPicsAndFacts = catPics.reduce((catPicsAndFacts, image, index) => {
                        catPicsAndFacts.push({
                            url: image.url,
                            fact: jsStringEscape(catFacts[index].fact),
                            id: index
                        });
                        return catPicsAndFacts;
                    }, []);
                    res.send(catPicsAndFacts);
                })
                .catch(error => {
                    console.log(error);
                });

        })
        .catch(error => {
            console.log(error);
        });
});