const json2csv = require('json2csv');
const fields = [ 'done', 'description' ];

function transformResponseDataToCsv(req, res) {
  const result = res.data;
  const data = result.data; // will be either `result` as an array or `data` if it is paginated
  const csv = json2csv.parse({ data, fields });

  res.type('csv');
  res.end(csv);
};

module.exports = transformResponseDataToCsv;
