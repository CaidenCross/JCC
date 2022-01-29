
//basecode to run type "npm run dev" in your git bash shell and then go to http://localhost:5000/ in your web browser
//to stop the serve go to your git bash shell and hit Ctrl + C

// Requiring module

const express = require('express');
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));

  //basecode