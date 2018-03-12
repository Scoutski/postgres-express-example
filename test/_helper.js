// Note that files that start with _
// are ignored by AVA.
const bodyParser = require('body-parser');
const app = require('../src');

app.use(bodyParser.json());

module.exports = {
  app,
};
