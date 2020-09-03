const json2csv = require('json2csv');
const fields = [ 'from', 'to', 'message' ];

function transformResponseDataToCsv(req, res) {
  const result = res.data;
  const data = result.data;
  const csv = json2csv.parse({ fields, data });

  res.type('csv');
  res.end(csv);
};

module.exports = transformResponseDataToCsv;