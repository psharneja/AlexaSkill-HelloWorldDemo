const Alexa = require('alexa-sdk');

// abc = "appidhere";
exports.handler = function(event, context, callback){
  let alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.appId = abc;
  alexa.execute();
};


let handlers = {
  'LaunchRequest' : function() {
    this.emit(':tell', 'Hello World');
  },
  'GreetingIntent': function() {
    this.emit(':tell', 'Hey Everyone! Alexa\'s here, Your Assistant for the day.');
  },
  'Simar': function() {
    this.emit(':tell','Hey! Good Afternoon Seemur.');
  }
};

//SLOTS --> this.event.request.intent.slots.<slotname>.<slotvalue>;
// slots check my expensis on {expense}

//wiprogafa.signin.aws.amazon.com
