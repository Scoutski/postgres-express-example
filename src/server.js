const { app } = require('./index');

const { NODE_ENV, PORT, TEST_PORT } = process.env;
const port = NODE_ENV === 'test' ? TEST_PORT : PORT;

// kept in a separate file so the app
// can be exported for tests.
app.listen(port, () => {
  console.log(`Server now running on port: ${port}`);
});
