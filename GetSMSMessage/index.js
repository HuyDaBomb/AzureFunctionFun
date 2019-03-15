// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     if (req.query.name || (req.body && req.body.name)) {
//         context.res = {
//             // status: 200, /* Defaults to 200 */
//             body: "Hello " + (req.query.name || req.body.name)
//         };
//     }
//     else {
//         context.res = {
//             status: 400,
//             body: "Please pass a name on the query string or in the request body"
//         };
//     }
// };

const qs = require("querystring");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
 
    if (req.body) {
        const formValues = qs.parse(req.body);
        console.log('message received', formValues.Body);
 
        context.res = {
            status: 200,
            body: "Message received:  " + formValues.Body
        };
    }
    else {
        context.res = {
            status: 500,
            body: "Something bad happened :-("
        };
    }
};