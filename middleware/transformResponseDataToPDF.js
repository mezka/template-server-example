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
        if (!error) {
            wkhtmltopdf(content, {}, function (err, stream) {
                if (!err) {
                    stream.on('data', function(data) {
                        res.write(data);
                    });
                    stream.on('end', function() {
                        res.status(200).end();
                    });
                } else {
                    /* on actual implementation it'll return json */
                    res.type('html');
                    res.end("<h2 style='background: pink; border-radius: 3px; padding: 4px;'>Trouble transforming stream's content to PDF" + err);
                }
            });
        } else {
            /* on actual implementation it'll return json */
            res.type('html');
            res.end("<h2 style='background: pink; border-radius: 3px; padding: 4px;'>Trouble rendering estimate's page</h2>" + error);
        }
    });
};

module.exports = transformResponseDataToPDF;