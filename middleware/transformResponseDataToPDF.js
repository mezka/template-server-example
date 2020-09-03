const nunjucks = require('nunjucks');
const wkhtmltopdf = require('wkhtmltopdf');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const app = express(feathers());

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

function transformResponseDataToPDF(req, res){
    const result = res.data;
    const data = result.data;
    const firstEstimate = data[0];

    res.type('application/pdf');

    nunjucks.render('template.njk', firstEstimate, function(error, content){
        wkhtmltopdf(content, {}, function (err, stream) {
            stream.on('data', function(data) {
                res.write(data);
            });
            stream.on('end', function() {
                res.status(200).end();
            });
        });
    });
};

module.exports = transformResponseDataToPDF;