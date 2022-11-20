require('dotenv').config();
const app = require('./src/app');

// begin server
const PORT = process.env.PORT;
app.listen(PORT, function(request, response) {
    console.log(`Server listening on port' ${PORT}`);
});