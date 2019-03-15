
var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
module.exports = async function (context, myQueueItem) {

    context.log('JavaScript queue trigger function processed work item: ', myQueueItem);

    context.log('myQueueItem.message: ' + myQueueItem.message);
    context.log('Sending to: ' + myQueueItem.phoneNumber);

    client.messages
        .create({
            body: myQueueItem.message,
            // to: myQueueItem.phoneNumber,  
            to: process.env.TWILIO_MY_PHONE_NUMBER,
            from: process.env.TWILIO_FROM_PHONE_NUMBER
        })
        .then((message) => console.log(message))
        .done();
};