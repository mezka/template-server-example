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
    /* for testing purposes, pass example object "sampleEstimate", built in EstimateService
    as second parameter in nunjucks.render() */
    nunjucks.render('template.njk', firstEstimate, function(error, content){
        error ? console.log(error) :
        wkhtmltopdf(content, { output: 'estimate.pdf' });
        res.type('html');
        res.end(content);
    });
};
module.exports = transformResponseDataToPDF;