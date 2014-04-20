

exports.aws = function(api, next) {

  var AWS = require('aws-sdk');
  AWS.config.loadFromPath('./aws-config.json');

  api.dynamodb = new AWS.DynamoDB();

};

