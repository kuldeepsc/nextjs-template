/*
*
The ErrorReport object in the example code is a fictional utility object that is used to send the error data to a server. The ErrorReport.send(error, errorInfo) function could be an async function that sends an HTTP post request to a server with the error and errorInfo data, which you can use to track and analyze the errors.

You can create the ErrorReport object with a function that implements the logic for sending the error report to the server. It could look something like this:
*
* */

const axios = require("axios");
const ErrorReport = {
  send: function(error, errorInfo) {
    // send error report to server
    // for example, by sending a POST request to a server-side endpoint
    axios.post('/error-report', {error, errorInfo})
        .catch(err => console.log(err))
  }
}
