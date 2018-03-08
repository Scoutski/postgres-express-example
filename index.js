const express = require('express');
const app = express();

const PORT = 3001;

// This route is used to confirm that your server
// is running and the API responds correctly.
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server now running on port: ${PORT}`);
});
